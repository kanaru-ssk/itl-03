// google place apiへのリクエスト

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

export const initMap = (queryText: string, placeType: placeType) => {
	const sendai = new google.maps.LatLng(38.26039273442388, 140.88246968423428);

	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: sendai,
		zoom: 16
	});

	if (queryText === '' && placeType === '') return;

	infowindow = new google.maps.InfoWindow();

	const request: google.maps.places.TextSearchRequest = {
		query: queryText,
		type: placeType,
		location: sendai
	};

	service = new google.maps.places.PlacesService(map);

	service.textSearch(
		request,
		(results: google.maps.places.PlaceResult[] | null, status: google.maps.places.PlacesServiceStatus): void => {
			if (status === google.maps.places.PlacesServiceStatus.OK && results) {
				const len = results.length;
				for (let i: number = 0; i < len; i++) {
					createMarker(results[i]);
				}
			}
		}
	);
};

function createMarker(place: google.maps.places.PlaceResult) {
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
}
