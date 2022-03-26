// 検索

// React取得
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// model取得
import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { convertPlace } from 'model/PlaceModel';
import { createPost } from 'model/PostModel';

type Props = {
	placeResults: google.maps.places.PlaceResult[];
};

const SearchResult = ({ placeResults }: Props) => {
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
						<Link to={'/explore/' + place.place_id}>{place.name}</Link>
						<button onClick={() => onAddPost(convertPlace(place))}>追加</button>
					</li>
				);
			})}
		</ul>
	);
};

export default SearchResult;
