// place詳細画面

import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../model/AuthModel';
import { service, getPlaceDetails } from '../../model/PlaceModel';
import { createItem } from '../../model/itemModel';

type Props = {
	placeId: string;
};

const Details = ({ placeId }: Props) => {
	const user = useContext(AuthContext);
	const [place, setPlace] = useState<google.maps.places.PlaceResult>();

	useEffect(() => {
		if (placeId && service) {
			getPlaceDetails(placeId).then((result) => {
				setPlace(result);
			});
		}
	}, [placeId, service]);

	if (place) {
		return (
			<div>
				<h2>Detail</h2>

				<h3>place詳細情報</h3>

				<button onClick={() => createItem(user.authUser?.uid, place)}>リストに追加</button>

				<div>名前 : {place?.name}</div>
				{place?.photos?.map((value, key) => {
					return <img key={key} src={value.getUrl({ maxWidth: 160 })} width="160px" height="90px" alt="" />;
				})}

				<div>
					タイプ :
					<ul>
						{place?.types?.map((value, key) => {
							return <li key={key}>{value}</li>;
						})}
					</ul>
				</div>

				<div>住所 : {place?.formatted_address}</div>

				<div>
					営業時間 :
					<ul>
						{place?.opening_hours?.weekday_text.map((value, key) => {
							return <li key={key}>{value}</li>;
						})}
					</ul>
				</div>

				<div>評価 : {place?.rating}</div>

				<div>評価数 : {place?.user_ratings_total}</div>

				<div>
					<a href={place?.website}>webサイト</a>
				</div>
			</div>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Details;
