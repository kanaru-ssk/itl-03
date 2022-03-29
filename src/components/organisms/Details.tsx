// place詳細画面

// css取得
import style from './Details.module.scss';

import pinImg from 'img/pin.svg';

// react取得
import { useEffect, useState } from 'react';

// model取得
import { getPlaceDetails, convertPlace } from 'model/PlaceModel';

// component取得
import Slider from 'components/molecules/Slider';
import Place from 'components/molecules/Place';
import PlaceImages from 'components/molecules/PlaceImages';
import Ratings from 'components/molecules/Ratings';
import Reviews from 'components/organisms/Reviews';
import Ogp from 'components/molecules/Ogp';

type Props = {
	paramsPlaceId: string;
};

const Details = ({ paramsPlaceId }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [place, setPlace] = useState<place>();
	const [placeResult, setPlaceResult] = useState<google.maps.places.PlaceResult>();

	useEffect(() => {
		if (paramsPlaceId) {
			getPlaceDetails(paramsPlaceId).then((result) => {
				setPlaceResult(result);
				setPlace(convertPlace(result));
			});
		}
	}, [paramsPlaceId]);

	if (place && placeResult) {
		return (
			<Slider isOpen={isOpen} setIsOpen={setIsOpen}>
				<div className={style.head}>
					<Place place={place} />
					<div className={style.rating}>
						<Ratings rating={placeResult?.rating} ratingTotal={placeResult?.user_ratings_total} />
					</div>
				</div>

				<div className={style.container}>
					<div className={style.item}>
						<PlaceImages photos={placeResult.photos} />
					</div>

					<div className={style.item}>
						<Reviews reviews={placeResult?.reviews} />
					</div>

					{placeResult?.website && (
						<div className={style.item}>
							<Ogp url={placeResult.website} />
						</div>
					)}

					<div className={style.item}>
						<div className={style.address}>
							<img src={pinImg} alt="pin" />
							<div>
								{placeResult.formatted_address?.substring(placeResult.formatted_address?.indexOf('〒'))}
							</div>
						</div>
					</div>

					<div className={style.item}>
						<h4>営業時間</h4>
						<ul>
							{placeResult?.opening_hours?.weekday_text?.map((value, key) => {
								return <li key={key}>{value}</li>;
							})}
						</ul>
					</div>
				</div>
			</Slider>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Details;
