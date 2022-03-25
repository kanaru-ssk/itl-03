// 検索ページ

import './Explore.scss';

import { useEffect } from 'react';

import { initMap } from 'model/PlaceModel';

import SlideArea from 'components/modules/Slider';

const Explore = () => {
	useEffect(() => {
		initMap();
	}, []);

	return (
		<main>
			<div id="map"></div>
			<SlideArea />
		</main>
	);
};

export default Explore;
