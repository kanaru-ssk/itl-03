// ログインページ

import style from './Login.module.scss';

import logoImg from 'img/logo.svg';

import { loginWithTwitter } from 'model/AuthModel';

import Button from 'components/atoms/Button';

const Login = () => {
	return (
		<main className={style.login}>
			<div>
				<img src={logoImg} className={style.logo} alt="" />
				<div className={style.copy}>
					一緒に行く人を
					<br />
					ゆるく募集
				</div>
			</div>

			<div className={style.start}>行きたいとこリストを始めよう</div>
			<Button onClick={loginWithTwitter}>Twitterサインイン</Button>
		</main>
	);
};

export default Login;
