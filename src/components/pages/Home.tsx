// トップページ

// React取得
import { useContext } from 'react';

// model取得
import { AuthContext, logout } from 'model/AuthModel';

// コンポーネント取得
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import Login from 'components/organisms/Login';

const Home = () => {
	const user = useContext(AuthContext);

	if (user.authUser?.isAnonymous) {
		return <Login />;
	} else {
		return (
			<>
				<Header />
				<main>
					<h1>Home</h1>
					<button onClick={logout}>ログアウト</button>
				</main>
				<Footer />
			</>
		);
	}
};

export default Home;
