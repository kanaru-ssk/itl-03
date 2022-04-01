// ユーザーページ

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

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
import UserButtonContainer from 'components/organisms/UserButtonContainer';
import UserTab from 'components/organisms/UserTab';
import UserContents from 'components/organisms/UserContents';
import UserEdit from 'components/organisms/UserEdit';
import Footer from 'components/organisms/Footer';

import Button from 'components/atoms/Button';

const UserPage = () => {
	const { paramsUserId } = useParams();
	const user = useAuth();
	const isMypage: boolean = user.dbUser?.user_id === paramsUserId;

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);
	const [tab, setTab] = useState<tab>('list');
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

	useEffect(() => {
		getUserDataByUserId(paramsUserId).then((user) => {
			setParamsUser(user);
		});
	}, [paramsUserId]);

	useEffect(() => {
		setParamsUser(user.dbUser);
	}, [user]);

	if (paramsUser) {
		return (
			<>
				<UserHeader paramsUserId={paramsUserId} />
				<main>
					<UserProfile user={paramsUser} />
					<UserButtonContainer>
						{isMypage && <Button onClick={() => setIsEditOpen(true)}>プロフィール編集</Button>}
						{/* {!isMypage && <Button onClick={() => {}}>フォロー</Button>} */}
					</UserButtonContainer>
					<UserTab tab={tab} setTab={setTab} />
					<UserContents uid={paramsUser.user_uid} tab={tab} />

					<UserEdit dbUser={user.dbUser} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
				</main>
				<Footer />
			</>
		);
	} else {
		return <div>not found</div>;
	}
};

export default UserPage;
