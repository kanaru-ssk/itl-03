// レビュー一覧

// css取得
import style from './Reviews.module.scss';

import Review from 'components/molecules/Review';

type Props = {
	reviews: google.maps.places.PlaceReview[] | undefined;
};

const Reviews = ({ reviews }: Props) => {
	return (
		<ul>
			{reviews?.map((review, key) => {
				return (
					<li key={key} className={style.item}>
						<Review review={review} />
					</li>
				);
			})}
		</ul>
	);
};

export default Reviews;
