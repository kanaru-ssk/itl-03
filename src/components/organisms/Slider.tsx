// 検索結果を表示するスライダー

import style from './Slider.module.scss';

import { useParams } from 'react-router-dom';

import Search from 'components/organisms/Search';
import Details from 'components/organisms/Details';

const SlideArea = () => {
	const { paramsPlaceId } = useParams();
	return (
		<div className={style.slider}>
			<div className={style.bar}></div>
			<h3>SlideArea</h3>
			{paramsPlaceId ? <Details paramsPlaceId={paramsPlaceId} /> : <Search />}
		</div>
	);
};

export default SlideArea;
