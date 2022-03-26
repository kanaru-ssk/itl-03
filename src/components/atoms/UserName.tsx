// ユーザー名

// css取得
import style from './UserName.module.scss';

type Props = {
	children: React.ReactNode;
};

const UserIcon = ({ children }: Props) => {
	return <span className={style.name}>{children}</span>;
};

export default UserIcon;
