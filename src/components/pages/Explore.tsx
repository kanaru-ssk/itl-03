// 検索ページ

import { useEffect } from 'react';

import { initMap } from 'model/PlaceModel';

import Map from 'components/organisms/Map';
import SlideArea from 'components/organisms/Slider';

const Explore = () => {
	useEffect(() => {
		initMap();
	}, []);

	return (
		<main>
			<Map />
			<SlideArea />
		</main>
	);
};

export default Explore;
