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
				</div>

				<div className={style.container}>
					<PlaceImages photos={placeResult.photos} />

					<div>住所 : {placeResult.formatted_address}</div>

					<div>
						営業時間 :
						<ul>
							{placeResult?.opening_hours?.weekday_text?.map((value, key) => {
								return <li key={key}>{value}</li>;
							})}
						</ul>
					</div>

					<div>
						<a href={placeResult?.website}>webサイト</a>
					</div>

					<div>評価 : {placeResult?.rating}</div>

					<div>評価数 : {placeResult?.user_ratings_total}</div>

					<div>
						レビュー :
						<ul>
							{placeResult?.reviews?.map((value, key) => {
								return (
									<li key={key}>
										星{value.rating}&nbsp;&nbsp;{value.author_name}&nbsp;&nbsp;{value.text}
										&nbsp;&nbsp;
										{value.time}
									</li>
								);
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
