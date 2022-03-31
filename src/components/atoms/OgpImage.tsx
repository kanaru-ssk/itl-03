// ogp画像

// img取得
import notFoundImg from 'img/notfound.svg';

// css取得
import style from './OgpImage.module.scss';

type Props = {
	src: string | undefined;
};

const OgpImage = ({ src }: Props) => {
	return (
		<img
			className={style.image}
			src={src ? src : notFoundImg}
			alt="place"
			onError={(e: any) => (e.target.src = notFoundImg)}
		/>
	);
};

export default OgpImage;
