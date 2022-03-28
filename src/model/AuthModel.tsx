// 認証関係の処理

import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext<authContextProps>({
	authUser: null,
	dbUser: null
});

// ログイン認証
export const AuthProvider = ({ children }: node) => {
	const [user, setUser] = useState<authContextProps>({
		authUser: null,
		dbUser: null
	});

	const auth = getAuth();

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, async (user: any) => {
			if (user) {
				setUser({ authUser: user, dbUser: null });

				if (!user.isAnonymous) {
					const { Timestamp } = await import('firebase/firestore');
					const { getUserDataByUid, createUserData } = await import('./UserModel');
					const userData = await getUserDataByUid(user.uid);
					if (userData) {
						setUser({ authUser: user, dbUser: userData });
					} else {
						// 新規ユーザーデータ作成
						const providerData = user.reloadUserInfo.providerUserInfo[0];
						const newUserData: dbUser = {
							at_created: Timestamp.now(),
							at_updated: Timestamp.now(),

							count_follow: 0,
							count_followed: 0,
							count_post: 0,
							count_post_checked: 0,

							uid: user.uid,
							user_id: providerData.screenName,
							user_name: providerData.displayName,
							user_icon: providerData.photoUrl,
							user_bio: '',
							user_twitter_disp_id: providerData.screenName,
							user_twitter_sys_id: providerData.rawId
						};

						setUser({ authUser: user, dbUser: newUserData });
						createUserData(user.uid, newUserData);
					}
				}
			} else {
				const { signInAnonymously } = await import('firebase/auth');
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
export const loginWithTwitter = async () => {
	const { TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
	const auth = getAuth();
	const provider = new TwitterAuthProvider();

	provider.setCustomParameters({ force_login: 'true' });

	signInWithRedirect(auth, provider);
};

// ログアウト
export const logout = async () => {
	const { signOut } = await import('firebase/auth');
	const auth = getAuth();
	signOut(auth);
};
