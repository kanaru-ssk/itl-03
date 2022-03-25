// トップページ

import { useContext } from 'react';

import { AuthContext, logout } from 'model/AuthModel';

import Login from 'components/organisms/Login';

const Home = () => {
	const user = useContext(AuthContext);

	if (user.authUser?.isAnonymous) {
		return <Login />;
	} else {
		return (
			<main>
				<h1>Home</h1>
				<button onClick={logout}>ログアウト</button>
			</main>
		);
	}
};

export default Home;
