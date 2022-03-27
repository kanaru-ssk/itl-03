// 評価総数

// css取得
import style from './Rating.module.scss';

type Props = {
	ratingTotal: number | undefined;
};

const RatingTotal = ({ ratingTotal }: Props) => {
	return <span className={style.rating}>({ratingTotal ? ratingTotal : 0})</span>;
};

export default RatingTotal;
