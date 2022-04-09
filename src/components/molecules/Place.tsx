// ユーザーアイコン

// react取得
import { Link } from 'react-router-dom';

// model取得
import { loginWithTwitter } from 'model/AuthModel';
import { convertPlaceType } from 'model/PlaceModel';
import { createItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';
import PlaceAddRadio from 'components/atoms/PlaceAddRadio';

// css取得
import style from './Place.module.scss';

type Props = {
	place: place;
};

const Place = ({ place }: Props) => {
	const user = useAuth();

	const onAddPost = (place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createItem(user.dbUser, place);
		}
	};

	return (
		<div className={style.parent}>
			<Link to={'/explore/' + place.place_id}>
				<div className={style.container}>
					<div className={style.icon}>
						<PlaceIcon src={place.place_photo} />
					</div>
					<div className={style.name}>
						<PlaceName name={place.place_name} />
					</div>
					<div className={style.type}>{convertPlaceType(place.place_type)}</div>
				</div>
			</Link>
			<div className={style.button}>
				<PlaceAddRadio name={place.place_name} onChange={() => onAddPost(place)} />
			</div>
		</div>
	);
};

export default Place;
