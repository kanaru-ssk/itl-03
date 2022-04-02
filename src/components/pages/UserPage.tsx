// ユーザーページ

// paramsUserが存在する => ユーザーページ
// paramsUserが存在しない => NotFound

// react取得
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// model取得
import { getUserDataByUserId } from 'model/UserModel';

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import UserHeader from 'components/organisms/UserHeader';
import UserProfile from 'components/organisms/UserProfile';
import UserButtons from 'components/organisms/UserButtons';
import UserTab from 'components/organisms/UserTab';
import UserContents from 'components/organisms/UserContents';
import UserEdit from 'components/organisms/UserEdit';
import Footer from 'components/organisms/Footer';
import NotFoundPage from './NotFoundPage';

const UserPage = () => {
	const { paramsUserId } = useParams();
	const user = useAuth();

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);
	const [tab, setTab] = useState<tab>('list');
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

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
					<UserProfile paramsUser={paramsUser} />
					<UserButtons paramsUserId={paramsUserId} paramsUser={paramsUser} setIsEditOpen={setIsEditOpen} />

					<UserTab tab={tab} setTab={setTab} />
					<UserContents uid={paramsUser.user_uid} tab={tab} />

					<UserEdit dbUser={user.dbUser} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
				</main>
				<Footer />
			</>
		);
	} else {
		return <NotFoundPage />;
	}
};

export default UserPage;
