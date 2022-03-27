// ユーザーアイコン

// css取得
import style from './Place.module.scss';

// react取得
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// model取得
import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { createPost } from 'model/PostModel';
import { convertPlaceType } from 'model/PlaceModel';

// component取得
import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';
import Button from 'components/atoms/Button';

type Props = {
	place: place;
};

const Place = ({ place }: Props) => {
	const user = useContext(AuthContext);

	const onAddPost = (place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createPost(user.dbUser, place);
		}
	};
	return (
		<div className={style.parent}>
			<Link to={'/explore/' + place.place_id}>
				<div className={style.container}>
					<div className={style.icon}>
						<PlaceIcon src={place.place_photos?.[0]} />
					</div>
					<div className={style.name}>
						<PlaceName name={place.place_name} />
					</div>
					<div className={style.type}>{convertPlaceType(place.place_type)}</div>
				</div>
			</Link>
			<div className={style.button}>
				<Button onClick={() => onAddPost(place)}>追加</Button>
			</div>
		</div>
	);
};

export default Place;
