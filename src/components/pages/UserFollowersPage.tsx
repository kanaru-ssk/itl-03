// ユーザーページ

// paramsUserが存在する => ユーザーページ
// paramsUserが存在しない => NotFound

// react取得
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { getUserDataByUserId } from 'model/UserModel';

// component取得
import UserFollowHeader from 'components/organisms/UserFollowHeader';
import Follows from 'components/organisms/Follows';
import Footer from 'components/organisms/Footer';
import NotFoundPage from 'components/pages/NotFoundPage';

const UserFollowingPage = () => {
	const { paramsUserId } = useParams();

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);
	const [isNotFound, setIsNotFound] = useState<boolean>(false);

	useEffect(() => {
		getUserDataByUserId(paramsUserId).then((_user) => {
			setParamsUser(_user);
			if (!_user) setIsNotFound(true);
		});
	}, [paramsUserId]);

	if (!isNotFound) {
		return (
			<>
				<UserFollowHeader text="フォロワー" />
				<main>
					<Follows uid={paramsUser?.user_uid} type="followers" />
				</main>
				<Footer />
			</>
		);
	} else {
		return <NotFoundPage />;
	}
};

export default UserFollowingPage;
