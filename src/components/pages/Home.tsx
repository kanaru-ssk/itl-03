// トップページ

import { useContext } from 'react';

import { AuthContext, logout } from 'model/AuthModel';

import Login from 'components/organisms/Login';

const Home = () => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const dbUser = user.dbUser;

	if (authUser?.isAnonymous) {
		return <Login />;
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
