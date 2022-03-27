// place詳細画面

// css取得
import style from './Details.module.scss';

// react取得
import { useEffect, useState } from 'react';

// model取得
import { service, getPlaceDetails, convertPlace } from 'model/PlaceModel';

// component取得
import Slider from 'components/molecules/Slider';
import Place from 'components/molecules/Place';
import PlaceImages from 'components/molecules/PlaceImages';
import Ratings from 'components/molecules/Ratings';
import Reviews from 'components/organisms/Reviews';

type Props = {
	paramsPlaceId: string;
};

const Details = ({ paramsPlaceId }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [place, setPlace] = useState<place>();
	const [placeResult, setPlaceResult] = useState<google.maps.places.PlaceResult>();

	useEffect(() => {
		if (paramsPlaceId && service) {
			getPlaceDetails(paramsPlaceId).then((result) => {
				setPlaceResult(result);
				setPlace(convertPlace(result));
			});
		}
	}, [paramsPlaceId, service]);

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
					<PlaceImages photos={placeResult.photos} />

					<Reviews reviews={placeResult?.reviews} />
					<div>住所 : {placeResult.formatted_address}</div>

					<div>
						<ul>
							{placeResult?.opening_hours?.weekday_text?.map((value, key) => {
								return <li key={key}>{value}</li>;
							})}
						</ul>
					</div>

					<div>
						<a href={placeResult?.website}>webサイト</a>
					</div>
				</div>
			</Slider>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Details;
