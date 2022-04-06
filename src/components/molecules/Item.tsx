// リストアイテム

// react取得
import { Link } from 'react-router-dom';

// model取得
import { convertPlaceType } from 'model/PlaceModel';

// component取得
import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';
import Button from 'components/atoms/Button';

// css取得
import style from './Item.module.scss';

type Props = {
	item: item;
};

const Item = ({ item }: Props) => {
	const onReaction = () => {
		const reactionURL =
			'https://twitter.com/messages/compose?' +
			'recipient_id=' +
			item.user_twitter_sys_id +
			'&text=' +
			'From: 行きたいとこリスト%0A「' +
			item.place_name +
			'」にいいねしました！';
		location.href = reactionURL;
	};

	const isExistPlaceId: boolean = item.place_id !== '';

	return (
		<div className={style.parent}>
			<div className={style.container}>
				<div className={style.icon}>
					{isExistPlaceId && (
						<Link to={'/explore/' + item.place_id}>
							<PlaceIcon src={item.place_photo} />
						</Link>
					)}
					{!isExistPlaceId && <PlaceIcon src={item.place_photo} />}
				</div>
				<div className={style.name}>
					<PlaceName name={item.place_name} />
				</div>
				<div className={style.type}>{convertPlaceType(item.place_type)}</div>
			</div>

			<div className={style.button}>
				<Button onClick={() => onReaction()} text="いいね" />
			</div>
		</div>
	);
};

export default Item;
