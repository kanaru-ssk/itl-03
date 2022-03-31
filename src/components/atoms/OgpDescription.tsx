// ogp ディスクリプション

// css取得
import style from './OgpDescription.module.scss';

type Props = {
	description: string | undefined;
};

const OgpDescription = ({ description }: Props) => {
	return <div className={style.description}>{description ? description : ''}</div>;
};

export default OgpDescription;
