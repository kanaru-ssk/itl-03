// トップページ

// React取得
import { useContext } from 'react';

// model取得
import { AuthContext, logout } from 'model/AuthModel';

// コンポーネント取得
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
