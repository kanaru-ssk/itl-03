// レビューヘッド

// component取得
import UserIcon from 'components/atoms/UserIcon';
import UserName from 'components/atoms/UserName';
import Stars from 'components/atoms/Stars';
import ReviewText from 'components/atoms/ReviewText';

// css取得
import style from './Review.module.scss';

type Props = {
	review: google.maps.places.PlaceReview;
};

const Review = ({ review }: Props) => {
	return (
		<div>
			<div className={style.container}>
				<UserIcon src={review.profile_photo_url} />
				<UserName>{review.author_name}</UserName>
				<Stars rating={review.rating} />
				{review.relative_time_description}
			</div>
			<div className={style.text}>
				<ReviewText text={review.text} />
			</div>
		</div>
	);
};

export default Review;
