// ユーザーアイコン

// css取得
import style from './Item.module.scss';

// react取得
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// model取得
import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { convertPlaceType } from 'model/PlaceModel';
import { createListItem } from 'model/ListModel';

// component取得
import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';
import Button from 'components/atoms/Button';

type Props = {
	item: item;
};

const Item = ({ item }: Props) => {
	const user = useContext(AuthContext);

	const onReaction = (place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			const reactionURL =
				'https://twitter.com/messages/compose?' +
				'recipient_id=' +
				item.user_twitter_sys_id +
				'&text=' +
				'From: 行きたいとこリスト%0A「' +
				item.place_name +
				'」にいいねしました！';
			location.href = reactionURL;
		}
	};

	return (
		<div className={style.parent}>
			<div className={style.container}>
				<div className={style.icon}>
					<Link to={'/explore/' + item.place_id}>
						<PlaceIcon src={item.place_photo} />
					</Link>
				</div>
				<div className={style.name}>
					<PlaceName name={item.place_name} />
				</div>
				<div className={style.type}>{convertPlaceType(item.place_type)}</div>
			</div>

			<div className={style.button}>
				<Button onClick={() => onReaction(item)}>いいね</Button>
			</div>
		</div>
	);
};

export default Item;