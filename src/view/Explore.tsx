// 検索ページ

import { useEffect } from 'react';

import { initMap } from '../model/PlaceModel';

const Explore = () => {
	useEffect(() => {
		initMap();
	}, []);

	return (
		<div>
			<h1>Explore</h1>
			<div id="map" style={{ height: '500px' }}></div>
		</div>
	);
};

export default Explore;
