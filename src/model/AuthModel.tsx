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
		const unsubscribed = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser({ authUser: user, dbUser: undefined });

				const { getUserData, createUserData } = await import('./UserModel');
				const userData = await getUserData(user.uid);
				if (userData) {
					setUser({ authUser: user, dbUser: userData });
				} else {
					createUserData(user);
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
