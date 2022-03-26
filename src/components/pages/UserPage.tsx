// ユーザーページ

// React取得
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { AuthContext } from 'model/AuthModel';
import { getUserDataByUserId } from 'model/UserModel';
import { getPostsByUserId } from 'model/PostModel';

// コンポーネント取得
import UserHeader from 'components/organisms/UserHeader';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';
import Profile from 'components/organisms/Profile';
import Posts from '../organisms/Posts';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

const UserPage = () => {
	const { paramsUid } = useParams();
	const user = useContext(AuthContext);

	const [paramsUser, setParamsUser] = useState<dbUser | null>(null);
	const [posts, setPosts] = useState<post[]>([]);

	useEffect(() => {
		getUserDataByUserId(paramsUid).then((user) => setParamsUser(user));
		getPostsByUserId(paramsUid).then((result) => setPosts(result));
	}, [paramsUid]);

	return (
		<>
			<UserHeader paramsUid={paramsUid} />
			<Main isHeaderShow={true}>
				{paramsUser && <Profile user={paramsUser} isMaypage={user.dbUser?.user_id === paramsUid} />}

				<Posts posts={posts} />
			</Main>
			<Footer />
		</>
	);
};

export default UserPage;
