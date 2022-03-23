// google place apiへのリクエスト

let map: google.maps.Map;
export let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;
let markers: google.maps.Marker[] = [];

// map初期化
export const initMap = () => {
	const sendai = new google.maps.LatLng(38.26039273442388, 140.88246968423428);

	const zoom: number = 15;

	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: sendai,
		zoom: zoom
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
	// マーカーを削除
	deleteMarker();

	return new Promise<place>((resolve) => {
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
					const place = convertPlace(result);
					resolve(place);
				}
			}
		);
	});
};

const convertPlace = (placeResult: google.maps.places.PlaceResult): place => {
	const geometry: geometry = {
		lat: placeResult.geometry?.location.lat(),
		lng: placeResult.geometry?.location.lng()
	};

	const photos: string[] | undefined = placeResult.photos?.map((value) => {
		return value.getUrl({ maxWidth: 400 });
	});

	const periods: google.maps.places.OpeningPeriod[] | undefined = placeResult.opening_hours?.periods;
	const weekday_text: string[] | undefined = placeResult.opening_hours?.weekday_text;
	const opening_hours: opening_hours = {
		periods: periods,
		weekday_text: weekday_text
	};

	const reviews: review[] | undefined = placeResult.reviews?.map((value) => {
		return {
			author_name: value.author_name,
			rating: value.rating,
			text: value.text,
			time: value.time
		};
	});

	const place: place = {
		place_id: placeResult.place_id,
		place_name: placeResult.name,
		place_types: placeResult.types,
		place_rating: placeResult.rating,
		place_user_ratings_total: placeResult.user_ratings_total,
		place_formatted_address: placeResult.formatted_address,
		place_formatted_phone_number: placeResult.formatted_phone_number,
		place_geometry: geometry,
		place_photos: photos,
		place_website: placeResult.website,
		place_opening_hours: opening_hours,
		place_price_level: placeResult.price_level,
		place_reviews: reviews
	};

	return place;
};
