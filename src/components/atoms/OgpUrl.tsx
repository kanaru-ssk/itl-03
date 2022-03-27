// ogpURL

// css取得
import style from './OgpUrl.module.scss';

type Props = {
	url: string;
};

const OgpUrl = ({ url }: Props) => {
	return <span className={style.url}>{url}</span>;
};

export default OgpUrl;
