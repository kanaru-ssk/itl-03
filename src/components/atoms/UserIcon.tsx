// ユーザーアイコン

// img取得
import userImg from 'img/user.svg';

// css取得
import style from './UserIcon.module.scss';

type Props = {
	src: string | undefined;
};

const UserIcon = ({ src }: Props) => {
	return (
		<img
			className={style.icon}
			src={src ? src : userImg}
			alt="user"
			onError={(e: any) => (e.target.src = userImg)}
		/>
	);
};

export default UserIcon;
