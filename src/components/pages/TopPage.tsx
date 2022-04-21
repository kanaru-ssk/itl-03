// トップページ

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import H3 from 'components/atoms/H3';
import BaseHeader from 'components/organisms/BaseHeader';
import Footer from 'components/organisms/Footer';
import LandingPage from 'components/organisms/LandingPage';
import Follows from 'components/organisms/Follows';

const TopPage = () => {
	const user = useAuth();

	if (user.authUser?.isAnonymous) {
		return <LandingPage />;
	} else {
		return (
			<>
				<BaseHeader />
				<main>
					<H3 text="行きたいとこリスト" />
					<Follows uid={user.dbUser?.user_uid} type="following" />
				</main>
				<Footer />
			</>
		);
	}
};

export default TopPage;
