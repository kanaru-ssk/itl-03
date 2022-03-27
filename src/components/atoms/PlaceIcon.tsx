// プレイスアイコン

// css取得
import style from './PlaceIcon.module.scss';

// 画像取得
import userImg from 'img/user.svg';

type Props = {
	src: string | undefined;
};

const PlaceIcon = ({ src }: Props) => {
	return (
		<img
			className={style.icon}
			src={src ? src : userImg}
			alt="place"
			onError={(e: any) => (e.target.src = userImg)}
		/>
	);
};

export default PlaceIcon;
