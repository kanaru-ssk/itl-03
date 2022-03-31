// トップページ

// model取得
import { logout } from 'model/AuthModel';

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import BaseHeader from 'components/organisms/BaseHeader';
import Footer from 'components/organisms/Footer';
import Login from 'components/organisms/Login';

const Home = () => {
	const user = useAuth();

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
