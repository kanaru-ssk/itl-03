// place詳細画面

import { useContext, useEffect, useState } from 'react';

import { AuthContext, loginWithTwitter } from 'model/AuthModel';
import { service, getPlaceDetails, convertPlace } from 'model/PlaceModel';
import { createPost } from 'model/PostModel';

type Props = {
	paramsPlaceId: string;
};

const Details = ({ paramsPlaceId }: Props) => {
	const user = useContext(AuthContext);
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

	const onAddItem = (_user: dbUser, place: place): void => {
		if (user.authUser?.isAnonymous) {
			loginWithTwitter();
		} else {
			createPost(_user, place);
		}
	};

	if (placeResult) {
		return (
			<div>
				<h2>Detail</h2>

				<h3>place詳細情報</h3>

				{place && <button onClick={() => onAddItem(user?.dbUser, place)}>リストに追加</button>}

				<div>名前 : {placeResult.name}</div>
				{/* {placeResult?.photos?.map((value, key) => {
					return <img key={key} src={value} width="160px" height="90px" alt="" />;
				})} */}

				<div>
					タイプ :
					<ul>
						{placeResult.types?.map((value, key) => {
							return <li key={key}>{value}</li>;
						})}
					</ul>
				</div>

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
