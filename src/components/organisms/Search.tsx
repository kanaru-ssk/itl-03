// 検索

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { searchMap, convertPlace } from 'model/PlaceModel';
import { createPost } from 'model/PostModel';

const Search = () => {
	const user = useContext(AuthContext);
	const [inputText, setInputText] = useState<string>('');
	const [queryText, setQueryText] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');
	const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);

	useEffect(() => {
		if (queryText !== '' || placeType !== '') searchMap(queryText, placeType).then((result) => setPlaces(result));
	}, [placeType, queryText]);

	const onAddPost = (place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createPost(user.dbUser, place);
		}
	};

	return (
		<div>
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
			<button onClick={() => setPlaceType('movie_theater')}>映画館</button>
			<button onClick={() => setPlaceType('lodging')}>宿泊</button>

			<ul>
				{places.map((place, key) => {
					return (
						<li key={key}>
							<Link to={'/explore/' + place.place_id}>{place.name}</Link>
							<button onClick={() => onAddPost(convertPlace(place))}>追加</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Search;
