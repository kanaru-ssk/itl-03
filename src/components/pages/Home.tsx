// トップページ

import style from './Home.module.scss';

import logoImg from 'img/logo.svg';

import { useContext } from 'react';

import { AuthContext, loginWithTwitter, logout } from 'model/AuthModel';

const Home = () => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const dbUser = user.dbUser;

	if (authUser?.isAnonymous) {
		return (
			<main className={style.login}>
				<img src={logoImg} className={style.logo} alt="" />
				<div className={style.copy}>
					一緒に行く人を
					<br />
					ゆるく募集
				</div>

				<div>行きたいとこリストを始めよう</div>
				<button onClick={loginWithTwitter}>Twitterでサインイン</button>
			</main>
		);
	} else {
		return (
			<main>
				<h1>Home</h1>
				<div>tiwtter認証済みなのでホームを表示</div>
				<div>ログインuid : {authUser?.uid}</div>
				<div>
					<img src={dbUser?.user_icon} alt="" />
					<div>{dbUser?.user_name}</div>
					<div>{dbUser?.user_bio}</div>
					<div>{dbUser?.user_twitter_disp_id}</div>
				</div>
				<button onClick={logout}>ログアウト</button>
			</main>
		);
	}
};

export default Home;
