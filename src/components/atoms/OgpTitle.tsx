// ogpタイトル

// css取得
import style from './OgpTitle.module.scss';

type Props = {
	title: string | undefined;
};

const OgpTitle = ({ title }: Props) => {
	return <span className={style.title}>{title ? title : '公式サイト'}</span>;
};

export default OgpTitle;
