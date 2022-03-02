// 認証関係の処理

import React, { createContext, useState, useEffect } from 'react';
import {
	User,
	getAuth,
	onAuthStateChanged,
	signInAnonymously,
	signInWithRedirect,
	TwitterAuthProvider,
	signOut
} from 'firebase/auth';

type AuthContextProps = {
	authUser: User | undefined;
	dbUser:
		| {
				user_id: string;
				user_name: string;
				user_icon: string;
				user_bio: string;
				user_twitter_disp_id: string;
				user_twitter_sys_id: Date;
				user_regist_date: Date;
		  }
		| undefined;
};

type Props = {
	children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>({
	authUser: undefined,
	dbUser: undefined
});

// ログイン認証
export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<AuthContextProps>({
		authUser: undefined,
		dbUser: undefined
	});

	const auth = getAuth();

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, async (user: any) => {
			if (user) {
				setUser({ authUser: user, dbUser: undefined });

				const { getUserDataByUid, createUserData } = await import('./UserModel');
				const userData = await getUserDataByUid(user.uid);
				if (userData) {
					setUser({ authUser: user, dbUser: userData });
				} else {
					// 新規ユーザーデータ作成
					const providerData = user.reloadUserInfo.providerUserInfo[0];
					const newUserData = {
						user_id: providerData.screenName,
						user_name: providerData.displayName,
						user_icon: providerData.photoUrl,
						user_bio: '',
						user_twitter_disp_id: providerData.screenName,
						user_twitter_sys_id: providerData.rawId,
						user_regist_date: new Date(),
						user_update_date: new Date()
					};

					setUser({ authUser: user, dbUser: newUserData });
					createUserData(user.uid, newUserData);
				}
			} else {
				signInAnonymously(auth);
			}
		});
		return () => {
			unsubscribed();
		};
	}, [auth]);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// twitterログイン
export const loginWithTwitter = () => {
	const auth = getAuth();
	const provider = new TwitterAuthProvider();

	signInWithRedirect(auth, provider);
};

// ログアウト
export const logout = () => {
	const auth = getAuth();
	signOut(auth);
};
