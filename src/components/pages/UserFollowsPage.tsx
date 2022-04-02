// ユーザーページ

// paramsUserが存在する => ユーザーページ
// paramsUserが存在しない => NotFound

// react取得
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { getUserDataByUserId } from 'model/UserModel';

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import UserHeader from 'components/organisms/UserHeader';
import Follows from 'components/organisms/Follows';
import Footer from 'components/organisms/Footer';
import NotFoundPage from 'components/pages/NotFoundPage';

const UserFollowsPage = () => {
	const { paramsUserId } = useParams();
	const user = useAuth();

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);

	useEffect(() => {
		getUserDataByUserId(paramsUserId).then((_user) => {
			setParamsUser(_user);
		});
	}, [paramsUserId]);

	if (paramsUser) {
		return (
			<>
				<UserHeader paramsUserId={paramsUserId} />
				<main>
					<Follows uid={user.dbUser?.user_uid} />
				</main>
				<Footer />
			</>
		);
	} else {
		return <NotFoundPage />;
	}
};

export default UserFollowsPage;
