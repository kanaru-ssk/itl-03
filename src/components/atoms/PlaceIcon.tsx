// プレイスアイコン

// img取得
import notFoundImg from 'img/notfound.svg';

// css取得
import style from './PlaceIcon.module.scss';

type Props = {
	src: string | undefined;
};

const PlaceIcon = ({ src }: Props) => {
	return (
		<img
			className={style.icon}
			src={src ? src : notFoundImg}
			alt="place"
			onError={(e: any) => (e.target.src = notFoundImg)}
		/>
	);
};

export default PlaceIcon;
