// リストアイテム

// react取得
import { Link } from 'react-router-dom';

// model取得
import { convertPlaceType } from 'model/PlaceModel';

// component取得
import PlaceIcon from 'components/atoms/PlaceIcon';
import PlaceName from 'components/atoms/PlaceName';

// css取得
import style from './CheckedItem.module.scss';

type Props = {
	item: item;
};

const CheckedItem = ({ item }: Props) => {
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

			<div className={style.date}></div>
		</div>
	);
};

export default CheckedItem;
