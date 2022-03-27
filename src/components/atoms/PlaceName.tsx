// プレイス名

// css取得
import style from './PlaceName.module.scss';

type Props = {
	children: React.ReactNode;
};

const PlaceName = ({ children }: Props) => {
	return <span className={style.name}>{children}</span>;
};

export default PlaceName;
