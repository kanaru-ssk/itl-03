// place詳細画面

import { useContext, useEffect, useState } from 'react';

import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { service, getPlaceDetails } from 'model/PlaceModel';
import { createItem } from 'model/itemModel';

type Props = {
	paramsPlaceId: string;
};

const Details = ({ paramsPlaceId }: Props) => {
	const user = useContext(AuthContext);
	const [place, setPlace] = useState<place>();

	useEffect(() => {
		if (paramsPlaceId && service) {
			getPlaceDetails(paramsPlaceId).then((result) => {
				setPlace(result);
			});
		}
	}, [paramsPlaceId, service]);

	const onAddItem = (_user: authUser, place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createItem(_user?.uid, place);
		}
	};

	if (place) {
		return (
			<div>
				<h2>Detail</h2>

				<h3>place詳細情報</h3>

				<button onClick={() => onAddItem(user?.authUser, place)}>リストに追加</button>

				<div>名前 : {place?.place_name}</div>
				{place?.place_photos?.map((value, key) => {
					return <img key={key} src={value} width="160px" height="90px" alt="" />;
				})}

				<div>
					タイプ :
					<ul>
						{place.place_types?.map((value, key) => {
							return <li key={key}>{value}</li>;
						})}
					</ul>
				</div>

				<div>住所 : {place?.place_formatted_address}</div>

				<div>
					営業時間 :
					<ul>
						{place?.place_opening_hours?.weekday_text?.map((value, key) => {
							return <li key={key}>{value}</li>;
						})}
					</ul>
				</div>

				<div>
					<a href={place?.place_website}>webサイト</a>
				</div>

				<div>評価 : {place?.place_rating}</div>

				<div>評価数 : {place?.place_user_ratings_total}</div>

				<div>
					レビュー :
					<ul>
						{place?.place_reviews?.map((value, key) => {
							return (
								<li key={key}>
									星{value.rating}&nbsp;&nbsp;{value.author_name}&nbsp;&nbsp;{value.text}&nbsp;&nbsp;
									{value.time}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default Details;
