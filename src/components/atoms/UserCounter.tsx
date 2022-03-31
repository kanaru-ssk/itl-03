// ユーザーカウンター

// css取得
import style from './UserCounter.module.scss';

type Props = {
	num: string | undefined;
};

const UserCounter = ({ num }: Props) => {
	return <span className={style.num}>{num}</span>;
};

export default UserCounter;
