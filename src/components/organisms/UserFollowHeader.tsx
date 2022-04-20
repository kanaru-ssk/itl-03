// フォロー一覧ヘッダー

// react取得
import { useNavigate } from 'react-router-dom';

// img取得
import prevImg from 'img/prev.svg';

// css取得
import style from './UserFollowHeader.module.scss';

type Props = {
	text: string;
};

const UserFollowHeader = ({ text }: Props) => {
	const navigate = useNavigate();

	return (
		<header className={style.header}>
			<img onClick={() => navigate(-1)} src={prevImg} alt="prev" />
			<div className={style.title}>{text}</div>
		</header>
	);
};

export default UserFollowHeader;
