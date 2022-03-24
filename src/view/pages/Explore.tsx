// 検索ページ

import './Explore.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { initMap } from 'model/PlaceModel';

import Search from 'view/components/modules/Search';
import Details from 'view/components/modules/Details';

const Explore = () => {
	const { placeId } = useParams();

	useEffect(() => {
		initMap();
	}, []);

	return (
		<main>
			<h1>Explore</h1>
			{placeId ? <Details placeId={placeId} /> : <Search />}
			<div id="map"></div>
		</main>
	);
};

export default Explore;
