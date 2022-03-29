// google place api 関係の処理

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;
let markers: google.maps.Marker[] = [];

// map初期化
export const initMap = () => {
	const sendai = new google.maps.LatLng(38.26039273442388, 140.88246968423428);

	const zoom: number = 15;

	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: sendai,
		zoom: zoom,
		disableDefaultUI: true
	});

	service = new google.maps.places.PlacesService(map);

	infowindow = new google.maps.InfoWindow();
};

// 場所を検索
export const searchMap = async (queryText: string, placeType: placeType) => {
	// マーカーを削除
	deleteMarker();

	return new Promise<google.maps.places.PlaceResult[]>((resolve) => {
		const rect = map.getBounds();

		const request: google.maps.places.TextSearchRequest = {
			query: queryText,
			type: placeType,
			bounds: rect ? rect : undefined
		};

		service.textSearch(
			request,
			(
				results: google.maps.places.PlaceResult[] | null,
				status: google.maps.places.PlacesServiceStatus
			): void => {
				if (status === google.maps.places.PlacesServiceStatus.OK && results) {
					const len = results.length;
					for (let i: number = 0; i < len; i++) {
						createMarker(results[i]);
					}
					map.setCenter(results[0].geometry!.location!);
					resolve(results);
				}
			}
		);
	});
};

// 検索結果からピンを作成
const createMarker = (place: google.maps.places.PlaceResult) => {
	if (!place.geometry || !place.geometry.location) return;

	const marker = new google.maps.Marker({
		map,
		position: place.geometry.location,
		title: place.name
	});

	marker.addListener('click', () => {
		infowindow.setContent(place.name || '');
		infowindow.open(map, marker);
	});

	markers.push(marker);
};

const deleteMarker = () => {
	const len = markers.length;
	for (let i: number = 0; i < len; i++) {
		markers[i].setMap(null);
	}
	markers = [];
};

export const getPlaceDetails = (placeId: string) => {
	return new Promise<google.maps.places.PlaceResult>((resolve) => {
		const request: google.maps.places.PlaceDetailsRequest = {
			placeId: placeId,
			fields: [
				'place_id',
				'name',
				'type',
				'formatted_address',
				'geometry',
				'photos',

				'formatted_phone_number',
				'opening_hours',
				'website',

				'rating',
				'user_ratings_total',
				'review',
				'price_level'
			]
		};

		service.getDetails(
			request,
			(result: google.maps.places.PlaceResult, status: google.maps.places.PlacesServiceStatus): void => {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					map.setCenter(result.geometry!.location!);
					createMarker(result);
					resolve(result);
				}
			}
		);
	});
};

export const convertPlace = (placeResult: google.maps.places.PlaceResult): place => {
	const type: string = placeResult.types ? placeResult.types[0] : '';

	const photo: string | undefined = placeResult.photos?.[0].getUrl({ maxWidth: 400 });

	const place: place = {
		place_id: placeResult.place_id,
		place_name: placeResult.name,
		place_type: type,
		place_photo: photo
	};

	return place;
};

export const convertPlaceType = (type: string | undefined): string => {
	if (type === 'cafe') {
		return 'カフェ';
	} else if (type === 'restaurant') {
		return 'レストラン';
	} else if (type === 'bar') {
		return 'バー';
	} else if (type === 'library') {
		return '図書館';
	} else if (type === 'art_gallery') {
		return '美術館';
	} else if (type === 'aquarium') {
		return '水族館';
	} else if (type === 'park') {
		return '公園';
	} else if (type === 'movie_theater') {
		return '映画館';
	} else if (type === 'lodging') {
		return '宿泊';
	} else {
		return 'その他';
	}
};
