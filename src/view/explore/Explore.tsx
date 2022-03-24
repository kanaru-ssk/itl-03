// 検索ページ

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { initMap } from 'model/PlaceModel';

import Search from 'view/explore/Search';
import Details from 'view/explore/Details';

const Explore = () => {
	const { placeId } = useParams();

	useEffect(() => {
		initMap();
	}, []);

	return (
		<div>
			<h1>Explore</h1>
			{placeId ? <Details placeId={placeId} /> : <Search />}
			<div id="map" style={placeId ? { height: '500px' } : { height: '500px' }}></div>
		</div>
	);
};

export default Explore;
