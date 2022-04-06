// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// img取得
import xmarkImg from 'img/xmark.svg';

// model取得
import { getList, createItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import Loading from 'components/atoms/Loading';
import Item from 'components/molecules/Item';
import ListMenu from 'components/organisms/ListSlider';
import Header from 'components/atoms/Header';
import InputTextArea from 'components/atoms/InputTextArea';
import PlaceAddButton from 'components/atoms/PlaceAddButton';
import SearchType from 'components/organisms/SearchType';

// css取得
import style from './ItemAdd.module.scss';

const ItemAdd = () => {
	const user = useAuth();
	const slider = useSlider();
	const [placeName, setPlaceName] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');

	const onAdd = () => {
		const place: place = {
			place_id: '',
			place_name: placeName,
			place_type: placeType,
			place_photo: '',
		};
		createItem(user.dbUser, place);
		slider(null);
	};

	return (
		<div className={style.container}>
			<div className={style.header}>
				<img onClick={() => slider(null)} src={xmarkImg} alt="" />
				<PlaceAddButton name="original-place" onChange={onAdd} />
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
