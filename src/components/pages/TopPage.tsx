// トップページ

// React取得
import { useContext } from 'react';

// model取得
import { AuthContext, logout } from 'model/AuthModel';

// コンポーネント取得
import BaseHeader from 'components/organisms/BaseHeader';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';
import Login from 'components/organisms/Login';

const Home = () => {
	const user = useContext(AuthContext);

	if (user.authUser?.isAnonymous) {
		return (
			<Main isHeaderShow={false}>
				<Login />
			</Main>
		);
	} else {
		return (
			<>
				<BaseHeader />
				<Main isHeaderShow={true}>
					<h1>Home</h1>
					<button onClick={logout}>ログアウト</button>
				</Main>
				<Footer />
			</>
		);
	}
};

export default Home;
