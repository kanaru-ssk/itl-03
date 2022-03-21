// google place apiへのリクエスト

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
		zoom: zoom
	});

	service = new google.maps.places.PlacesService(map);

	infowindow = new google.maps.InfoWindow();
};

// 場所を検索
export const searchMap = async (queryText: string, placeType: placeType) => {
	// マーカーを削除
	deleteMarker();

	let places: google.maps.places.PlaceResult[] = [];

	return new Promise<google.maps.places.PlaceResult[]>((resolve) => {
		// 検索文字列、タイプがない場合return
		if (queryText === '' && placeType === '') return;

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
					places = results;
					resolve(places);
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
