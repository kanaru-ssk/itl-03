// 評価平均

// css取得
import style from './Rating.module.scss';

type Props = {
	rating: number | undefined;
};

const Rating = ({ rating }: Props) => {
	if (rating === undefined) {
		return <span className={style.rating}>評価なし</span>;
	} else {
		return <span className={style.rating}>{rating}</span>;
	}
};

export default Rating;
