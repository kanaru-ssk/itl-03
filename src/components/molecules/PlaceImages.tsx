// プレイス画像一覧

// component取得
import PlaceImage from 'components/atoms/PlaceImage';

// css取得
import style from './PlaceImages.module.scss';

type Props = {
	photos: google.maps.places.PlacePhoto[] | undefined;
};

const PlaceImages = ({ photos }: Props) => {
	return (
		<ul className={style.container}>
			{photos?.map((photo, key) => {
				return (
					<li key={key}>
						<PlaceImage src={photo.getUrl({ maxWidth: 320 })} />
					</li>
				);
			})}
		</ul>
	);
};

export default PlaceImages;
