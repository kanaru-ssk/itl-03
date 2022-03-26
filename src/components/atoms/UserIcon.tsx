// ユーザーアイコン

// css取得
import style from './UserIcon.module.scss';

// 画像取得
import userImg from 'img/user.svg';

type Props = {
	extendClass?: string | undefined;
	src: string | undefined;
};

const UserIcon = ({ extendClass, src }: Props) => {
	return (
		<img
			className={`${extendClass} ${style.icon}`}
			src={src}
			alt="user-icon"
			onError={(e: any) => (e.target.src = userImg)}
		/>
	);
};

export default UserIcon;
