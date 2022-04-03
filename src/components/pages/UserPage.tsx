// ユーザーページ

// paramsUserが存在する && ログインユーザーではない => ユーザーページ
// paramsUserが存在する && ログインユーザー => マイページ
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
	const [isNotFound, setIsNotFound] = useState<boolean>(false);
	const [isMypage, setIsMypage] = useState<boolean>(false);

	useEffect(() => {
		getUserDataByUserId(paramsUserId).then((_user) => {
			setParamsUser(_user);
			if (!_user) setIsNotFound(true);
		});
	}, [paramsUserId]);

	useEffect(() => {
		if (paramsUser?.user_uid === user.dbUser?.user_uid) {
			setIsMypage(true);
		} else {
			setIsMypage(false);
		}
	}, [paramsUser, user.dbUser]);

	useEffect(() => {
		if (isMypage) {
			setParamsUser(user.dbUser);
		}
	}, [user.dbUser]);

	if (!isNotFound) {
		return (
			<>
				<UserHeader paramsUserId={paramsUserId} />
				<main>
					<UserProfile paramsUser={paramsUser} />
					<UserButtons paramsUserId={paramsUserId} paramsUser={paramsUser} setIsEditOpen={setIsEditOpen} />

					<UserTab tab={tab} setTab={setTab} />

					{paramsUser && <UserContents paramsUid={paramsUser?.user_uid} tab={tab} />}

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
