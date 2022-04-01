// ユーザーページのボタンコンテナ

// css取得
import style from './UserButtonContainer.module.scss';

type Props = {
	children: React.ReactNode;
};

const UserButtonContainer = ({ children }: Props) => {
	return <div className={style.container}>{children}</div>;
};

export default UserButtonContainer;
