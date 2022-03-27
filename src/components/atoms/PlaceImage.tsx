// プレイス画像

// css取得
import style from './PlaceImage.module.scss';

// 画像取得
import userImg from 'img/user.svg';

type Props = {
	src: string | undefined;
};

const PlaceImage = ({ src }: Props) => {
	return (
		<img
			className={style.image}
			src={src ? src : userImg}
			alt="place"
			onError={(e: any) => (e.target.src = userImg)}
		/>
	);
};

export default PlaceImage;
