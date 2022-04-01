// ログインページ

// img取得
import logoImg from 'img/logo.svg';

// model取得
import { loginWithTwitter } from 'model/AuthModel';

// component取得
import ButtonLogin from 'components/atoms/ButtonLogin';

// css取得
import style from './Login.module.scss';

const Login = () => {
	return (
		<div className={style.login}>
			<div>
				<img src={logoImg} className={style.logo} alt="logo" />
				<div className={style.copy}>行きたいとこリスト</div>
			</div>

			<div className={style.start}>行きたいとこリストを始めよう</div>
			<ButtonLogin onClick={loginWithTwitter}>Twitterサインイン</ButtonLogin>
		</div>
	);
};

export default Login;
