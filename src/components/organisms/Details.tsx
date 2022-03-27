// place詳細画面

// css取得
import style from './Details.module.scss';

// react取得
import { useEffect, useState } from 'react';

// model取得
import { getPlaceDetails, convertPlace } from 'model/PlaceModel';
import { getOgp } from 'model/OgpModel';

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
	const [ogp, setOgp] = useState<ogp | undefined>(undefined);

	useEffect(() => {
		if (paramsPlaceId) {
			getPlaceDetails(paramsPlaceId).then((result) => {
				setPlaceResult(result);
				setPlace(convertPlace(result));
			});
		}
	}, [paramsPlaceId]);

	useEffect(() => {
		getOgp(placeResult?.website).then((result) => {
			setOgp(result);
		});
	}, [placeResult]);

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

					{placeResult?.website && <Ogp ogp={ogp} url={placeResult.website} />}
					{/* {ogp && 'ogpカード'}
					<div>
						<a href={placeResult?.website}>webサイト</a>
					</div> */}

					<div>{placeResult.formatted_address?.substring(placeResult.formatted_address?.indexOf('〒'))}</div>

					<div>
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
