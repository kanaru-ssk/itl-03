// 通知ページ

import style from './Slider.module.scss';

import { useParams } from 'react-router-dom';

import Search from 'components/modules/Search';
import Details from 'components/modules/Details';

const SlideArea = () => {
	const { placeId } = useParams();
	return (
		<div className={style.slider}>
			<div className={style.bar}></div>
			<h3>SlideArea</h3>
			{placeId ? <Details placeId={placeId} /> : <Search />}
		</div>
	);
};

export default SlideArea;
