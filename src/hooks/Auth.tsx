// 認証

// react取得
import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext<authContextProps>({
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
					const { getUserDataByUid, createUserData } = await import('model/UserModel');
					const userData = await getUserDataByUid(user.uid);
					if (userData) {
						setUser({ authUser: user, dbUser: userData });
					} else {
						// 新規ユーザーデータ作成
						const providerData = user.reloadUserInfo.providerUserInfo[0];
						const newUserData: dbUser = {
							at_created: Timestamp.now(),
							at_updated: Timestamp.now(),

							count_follows: 0,
							count_followers: 0,
							count_list: 0,
							count_list_checked: 0,

							user_uid: user.uid,
							user_id: providerData.screenName,
							user_name: providerData.displayName,
							user_icon: providerData.photoUrl,
							user_bio: '',
							user_twitter_disp_id: providerData.screenName,
							user_twitter_sys_id: providerData.rawId,
							user_is_public: true
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

export const useAuth = () => useContext(AuthContext);
