// トップページ

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import BaseHeader from 'components/organisms/BaseHeader';
import Footer from 'components/organisms/Footer';
import Login from 'components/organisms/Login';
import Follows from 'components/organisms/Follows';

const Home = () => {
	const user = useAuth();

	if (user.authUser?.isAnonymous) {
		return <Login />;
	} else {
		return (
			<>
				<BaseHeader />
				<main>
					<h3>行きたいとこリスト</h3>
					<Follows uid={user.dbUser?.user_uid} type="following" />
				</main>
				<Footer />
			</>
		);
	}
};

export default Home;
