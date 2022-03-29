// ユーザーページ

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

// react取得
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { AuthContext } from 'model/AuthModel';
import { getUserDataByUserId } from 'model/UserModel';

// component取得
import UserHeader from 'components/organisms/UserHeader';
import UserContents from 'components/organisms/UserContents';
import Footer from 'components/organisms/Footer';
import Profile from 'components/organisms/Profile';

const UserPage = () => {
	const { paramsUserId } = useParams();
	const user = useContext(AuthContext);

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);
	const [tab, setTab] = useState<tab>('list');

	useEffect(() => {
		getUserDataByUserId(paramsUserId).then((user) => {
			setParamsUser(user);
		});
	}, [paramsUserId]);

	if (paramsUser) {
		return (
			<>
				<UserHeader paramsUserId={paramsUserId} />
				<main>
					<div>
						<Profile user={paramsUser} isMaypage={user.dbUser?.user_id === paramsUserId} />
						<UserContents uid={paramsUser.user_uid} tab={tab} />
					</div>
				</main>
				<Footer />
			</>
		);
	} else {
		return <div>not found</div>;
	}
};

export default UserPage;
