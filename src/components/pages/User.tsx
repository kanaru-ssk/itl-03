// ユーザーページ

// React取得
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { AuthContext } from 'model/AuthModel';
import { getUserDataByUserId } from 'model/UserModel';
import { getPostsByUserId } from 'model/PostModel';

// コンポーネント取得
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';
import Posts from 'components/organisms/Posts';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

const User = () => {
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
			<Main isHeaderShow={false}>
				<h1>User</h1>
				<div>パラメーターuid : {paramsUid}</div>
				{user.dbUser?.user_id === paramsUid ? <h2>マイページ</h2> : <h2>ユーザーページ</h2>}

				<h3>ユーザー情報</h3>
				<div>
					<img src={paramsUser?.user_icon} alt="" />
					<div>{paramsUser?.user_name}</div>
					<div>{paramsUser?.user_bio}</div>
					<div>{paramsUser?.user_twitter_disp_id}</div>
				</div>

				<Posts posts={posts} />
			</Main>
			<Footer />
		</>
	);
};

export default User;
