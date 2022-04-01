// ロード画面

// img取得
import logoImg from 'img/logo.svg';

// hooks取得
import { useAuth } from 'hooks/Auth';

// css取得
import style from './Loading.module.scss';

const Loading = () => {
	const user = useAuth();

	return (
		<div style={user.authUser ? { opacity: 0 } : { opacity: 1 }} className={style.loading}>
			<img src={logoImg} className={style.logo} alt="logo" />
		</div>
	);
};

export default Loading;
