// google place apiへのリクエスト

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

export const initMap = () => {
	const sendai = new google.maps.LatLng(38.26039273442388, 140.88246968423428);

	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: sendai,
		zoom: 16
	});

	const request: google.maps.places.TextSearchRequest = {
		query: '',
		type: 'cafe',
		location: sendai
	};

	service = new google.maps.places.PlacesService(map);

	service.textSearch(
		request,
		(results: google.maps.places.PlaceResult[] | null, status: google.maps.places.PlacesServiceStatus): void => {
			if (status === google.maps.places.PlacesServiceStatus.OK && results) {
				console.log(results);
				const len = results.length;
				for (let i: number = 0; i < len; i++) {
					createMarker(results[i]);
					console.log(results[i].name);
				}
			}
		}
	);
};

function createMarker(place: google.maps.places.PlaceResult) {
	if (!place.geometry || !place.geometry.location) return;

	const marker = new google.maps.Marker({
		map,
		position: place.geometry.location
	});

	infowindow = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, 'click', () => {
		infowindow.setContent(place.name || '');
		// infowindow.setContent('test window');
		infowindow.open(map);

		console.log('open info');
	});
}
