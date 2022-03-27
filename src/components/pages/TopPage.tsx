// トップページ

// react取得
import { useContext } from 'react';

// model取得
import { AuthContext, logout } from 'model/AuthModel';

// component取得
import BaseHeader from 'components/organisms/BaseHeader';
import Footer from 'components/organisms/Footer';
import Login from 'components/organisms/Login';

const Home = () => {
	const user = useContext(AuthContext);

	if (user.authUser?.isAnonymous) {
		return <Login />;
	} else {
		return (
			<>
				<BaseHeader />
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
