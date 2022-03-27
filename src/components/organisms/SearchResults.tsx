// 検索

// React取得
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// model取得
import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { convertPlace, convertPlaceType } from 'model/PlaceModel';
import { createPost } from 'model/PostModel';

import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';

type Props = {
	placeResults: google.maps.places.PlaceResult[];
};

const SearchResults = ({ placeResults }: Props) => {
	const user = useContext(AuthContext);

	const onAddPost = (place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createPost(user.dbUser, place);
		}
	};

	return (
		<ul>
			{placeResults.map((place, key) => {
				return (
					<li key={key}>
						<Link to={'/explore/' + place.place_id}>
							<PlaceIcon src={place.photos?.[0].getUrl({ maxWidth: 96 })} />
							<PlaceName>{place.name}</PlaceName>
							<div>{convertPlaceType(place.types?.[0])}</div>
						</Link>
						<button onClick={() => onAddPost(convertPlace(place))}>追加</button>
					</li>
				);
			})}
		</ul>
	);
};

export default SearchResults;
