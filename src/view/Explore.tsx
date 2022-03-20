// 検索ページ

import { useEffect, useState } from 'react';

import { initMap } from '../model/PlaceModel';

const Explore = () => {
	const [inputText, setInputText] = useState<string>('');
	const [queryText, setQueryText] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');

	useEffect(() => {
		initMap(queryText, placeType);
	}, [placeType, queryText]);

	return (
		<div>
			<h1>Explore</h1>
			<input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
			<button onClick={() => setQueryText(inputText)}>検索</button>
			<br />
			<button onClick={() => setPlaceType('cafe')}>カフェ</button>
			<button onClick={() => setPlaceType('restaurant')}>レストラン</button>
			<button onClick={() => setPlaceType('bar')}>バー</button>
			<button onClick={() => setPlaceType('library')}>図書館</button>
			<button onClick={() => setPlaceType('art_gallery')}>美術館</button>
			<button onClick={() => setPlaceType('aquarium')}>水族館</button>
			<button onClick={() => setPlaceType('park')}>公園</button>
			<div id="map" style={{ height: '500px' }}></div>
		</div>
	);
};

export default Explore;
