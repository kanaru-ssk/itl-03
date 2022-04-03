// 認証

// react取得
import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext<authContextProps>({
	authUser: null,
	dbUser: null,
	setDBUser: () => {}
});

// ログイン認証
export const AuthProvider = ({ children }: node) => {
	const [authUser, setAuthUser] = useState<authUser>(null);
	const [dbUser, setDBUser] = useState<dbUser>(null);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, async (_user: any) => {
			if (_user) {
				setAuthUser(_user);

				if (!_user.isAnonymous) {
					const { Timestamp } = await import('firebase/firestore');
					const { getUserDataByUid, createUserData } = await import('model/UserModel');
					const userData = await getUserDataByUid(_user.uid);
					if (userData) {
						setDBUser(userData);
					} else {
						// 新規ユーザーデータ作成
						const providerData = _user.reloadUserInfo.providerUserInfo[0];
						const newUserData: dbUser = {
							at_created: Timestamp.now(),
							at_updated: Timestamp.now(),

							count_following: 0,
							count_followers: 0,
							count_list: 0,
							count_list_checked: 0,

							user_uid: _user.uid,
							user_id: providerData.screenName,
							user_name: providerData.displayName,
							user_icon: providerData.photoUrl,
							user_bio: '',
							user_twitter_disp_id: providerData.screenName,
							user_twitter_sys_id: providerData.rawId,
							user_is_public: true
						};

						setDBUser(newUserData);
						createUserData(_user.uid, newUserData);
					}
				}
			} else {
				const { signInAnonymously } = await import('firebase/auth');
				signInAnonymously(auth);
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ authUser: authUser, dbUser: dbUser, setDBUser: setDBUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
