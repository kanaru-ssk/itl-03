// プレイス名

// css取得
import style from './PlaceName.module.scss';

type Props = {
	name: string;
};

const PlaceName = ({ name }: Props) => {
	return <span className={style.name}>{name}</span>;
};

export default PlaceName;
