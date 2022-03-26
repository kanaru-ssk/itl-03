// ユーザーID

// css取得
import style from './UserId.module.scss';

type Props = {
	children: React.ReactNode;
};

const UserId = ({ children }: Props) => {
	return <span className={style.id}>@{children}</span>;
};

export default UserId;
