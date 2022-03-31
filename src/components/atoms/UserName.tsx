// ユーザー名

// css取得
import style from './UserName.module.scss';

type Props = {
	name: string | undefined;
};

const UserName = ({ name }: Props) => {
	return <span className={style.name}>{name}</span>;
};

export default UserName;
