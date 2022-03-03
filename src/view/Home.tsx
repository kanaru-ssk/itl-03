// トップページ

import { useContext } from 'react';
import { AuthContext, loginWithTwitter, logout } from '../model/AuthModel';

import Loading from './Loading';

const Home = () => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const dbUser = user.dbUser;

	if (authUser) {
		if (authUser?.isAnonymous) {
			return (
				<div>
					<h1>Login</h1>
					<div>匿名認証なのでログイン画面を表示</div>
					<div>ログインuid : {authUser?.uid}</div>
					<button onClick={loginWithTwitter}>ログイン</button>
				</div>
			);
		} else {
			return (
				<div>
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
				</div>
			);
		}
	} else {
		return <Loading />;
	}
};

export default Home;
