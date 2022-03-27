// プレイス画像

// css取得
import style from './PlaceImage.module.scss';

// img取得
import notFoundImg from 'img/notfound.svg';

type Props = {
	src: string | undefined;
};

const PlaceImage = ({ src }: Props) => {
	return (
		<img
			className={style.image}
			src={src ? src : notFoundImg}
			alt="place"
			onError={(e: any) => (e.target.src = notFoundImg)}
		/>
	);
};

export default PlaceImage;
