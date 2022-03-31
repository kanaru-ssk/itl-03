// 評価

// component取得
import Rating from 'components/atoms/Rating';
import Stars from 'components/atoms/Stars';
import RatingTotal from 'components/atoms/RatingTotal';

// css取得
import style from './Ratings.module.scss';

type Props = {
	rating: number | undefined;
	ratingTotal: number | undefined;
};

const Ratings = ({ rating, ratingTotal }: Props) => {
	return (
		<div className={style.container}>
			<Rating rating={rating} />
			<Stars rating={rating} />
			<RatingTotal ratingTotal={ratingTotal} />
		</div>
	);
};

export default Ratings;
