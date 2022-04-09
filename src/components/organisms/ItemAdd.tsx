// リスト一覧

// react取得
import { useState } from 'react';

// img取得
import xmarkImg from 'img/xmark.svg';

// model取得
import { createItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import PlaceAddButton from 'components/atoms/PlaceAddButton';
import SearchType from 'components/organisms/SearchType';

// css取得
import style from './ItemAdd.module.scss';

const ItemAdd = () => {
	const user = useAuth();
	const slider = useSlider();
	const [placeName, setPlaceName] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');

	const onCancel = () => {
		setPlaceName('');
		setPlaceType('');
		slider(null);
	};

	const onAdd = () => {
		const place: place = {
			place_id: '',
			place_name: placeName,
			place_type: placeType,
			place_photo: '',
		};
		createItem(user.dbUser, place);
		setPlaceName('');
		setPlaceType('');
		slider(null);
	};

	return (
		<div className={style.container}>
			<div className={style.header}>
				<img onClick={onCancel} src={xmarkImg} alt="" />
				<PlaceAddButton onClick={onAdd} />
			</div>
			<SearchType placeType={placeType} setPlaceType={setPlaceType} />
			<textarea
				className={style.textarea}
				placeholder="行きたい場所を入力"
				value={placeName}
				onChange={(e) => setPlaceName(e.target.value)}
			></textarea>
		</div>
	);
};

export default ItemAdd;
