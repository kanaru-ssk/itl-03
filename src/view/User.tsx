// ユーザーページ

import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../model/AuthModel';

import { getUserDataByUserId } from '../model/UserModel';
import { FieldValue } from 'firebase/firestore';
type dbUser = {
	user_id: string;
	user_name: string;
	user_icon: string;
	user_bio: string;
	user_twitter_disp_id: string;
	user_twitter_sys_id: Date | FieldValue;
	user_regist_date: Date | FieldValue;
	user_update_date: Date | FieldValue;
};

// 認証されていない => ユーザーページ
// 認証済み + 匿名認証 => ユーザーページ
// 認証済み + 表示userとログインuserが異なる => ユーザーページ
// 認証済み + 表示userとログインuserが同じ => マイページ

const User = () => {
	const { paramsUid } = useParams();
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const dbUser = user.dbUser;

	const [paramsUser, setParamsUser] = useState<dbUser | undefined>(undefined);
	useEffect(() => {
		getUserDataByUserId(paramsUid).then((result) => {
			setParamsUser(result);
		});
	}, [paramsUid]);

	if (dbUser?.user_id === paramsUid) {
		return (
			<div>
				<h1>User</h1>
				<h2>マイページ</h2>
				<div>パラメーターuid : {paramsUid}</div>
				<h3>ログイン情報</h3>
				<div>
					<img src={dbUser?.user_icon} alt="" />
					<div>{dbUser?.user_name}</div>
					<div>{dbUser?.user_bio}</div>
					<div>{dbUser?.user_twitter_disp_id}</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>User</h1>
				<h2>ユーザーページ</h2>
				<div>パラメーターuid : {paramsUid}</div>
				<h3>ログイン情報</h3>
				<div>ログインuid : {dbUser?.user_id}</div>
				<div>認証状態 : {authUser ? '認証済み' : '未認証'}</div>
				<div>認証種別 : {authUser?.isAnonymous ? '匿名' : 'twitterログイン'}</div>
				<h3>ユーザー情報</h3>
				<div>
					<img src={paramsUser?.user_icon} alt="" />
					<div>{paramsUser?.user_name}</div>
					<div>{paramsUser?.user_bio}</div>
					<div>{paramsUser?.user_twitter_disp_id}</div>
				</div>
			</div>
		);
	}
};

export default User;
