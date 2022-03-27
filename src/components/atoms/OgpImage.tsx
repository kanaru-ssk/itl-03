// ogp画像

// css取得
import style from './OgpImage.module.scss';

// img取得
import notFoundImg from 'img/notfound.svg';

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
