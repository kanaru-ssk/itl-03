// プレイスアイコン

// css取得
import style from './ProfileIcon.module.scss';

// img取得
import userImg from 'img/user.svg';

type Props = {
	src: string | undefined;
};

const ProfileIcon = ({ src }: Props) => {
	return (
		<img
			className={style.icon}
			src={src ? src : userImg}
			alt="icon"
			onError={(e: any) => (e.target.src = userImg)}
		/>
	);
};

export default ProfileIcon;
