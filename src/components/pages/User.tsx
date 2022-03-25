// ユーザーページ

// React取得
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// model取得
import { AuthContext } from 'model/AuthModel';
import { getUserDataByUserId } from 'model/UserModel';
import { getItems } from 'model/itemModel';

// コンポーネント取得
import Footer from 'components/organisms/Footer';
import Items from 'components/organisms/Items';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

const User = () => {
	const { paramsUid } = useParams();
	const user = useContext(AuthContext);

	const [paramsUser, setParamsUser] = useState<dbUser | undefined>(undefined);
	const [items, setItems] = useState<item[]>([]);

	useEffect(() => {
		getUserDataByUserId(paramsUid).then((user) => {
			setParamsUser(user);
			getItems(user?.uid).then((result) => setItems(result));
		});
	}, [paramsUid]);

	return (
		<>
			<main>
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

				<Items items={items} />
			</main>
			<Footer />
		</>
	);
};

export default User;
