// 認証

// react取得
import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, onSnapshot, doc } from 'firebase/firestore';

const AuthContext = createContext<authContextProps>({
	authUser: null,
	dbUser: null,
});

// ログイン認証
export const AuthProvider = ({ children }: node) => {
	const [authUser, setAuthUser] = useState<authUser>(null);
	const [dbUser, setDBUser] = useState<dbUser>(null);

	const auth = getAuth();
	const db = getFirestore();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (_user: any) => {
			if (_user) {
				setAuthUser(_user);

				if (!_user.isAnonymous) {
					const { Timestamp } = await import('firebase/firestore');
					const { getUserDataByUid, createUserData } = await import('model/UserModel');
					const userData = await getUserDataByUid(_user.uid);
					if (userData) {
					} else {
						// 新規ユーザーデータ作成
					}
				}
			} else {
				const { signInAnonymously } = await import('firebase/auth');
				signInAnonymously(auth);
			}
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (auth.currentUser && !auth.currentUser?.isAnonymous) {
			const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), async (doc) => {
				if (doc.exists()) {
					const _dbUser: dbUser = {
						at_created: doc.data().at_created,
						at_updated: doc.data().at_updated,

						user_uid: doc.id,
						user_id: doc.data().user_id,
						user_name: doc.data().user_name,

						user_icon: doc.data().user_icon,
						user_bio: doc.data().user_bio,
						user_twitter_disp_id: doc.data().user_twitter_disp_id,
						user_twitter_sys_id: doc.data().user_twitter_sys_id,
						user_is_public: doc.data().user_is_public,
					};
					setDBUser(_dbUser);
				} else {
					// 新規ユーザー作成
					const { createUserData } = await import('model/UserModel');
					const _user: any = auth.currentUser;
					const providerData = _user.reloadUserInfo.providerUserInfo[0];
					createUserData(auth.currentUser, providerData);
				}
			});
			return () => unsubscribe();
		}
	}, [auth.currentUser]);

	return <AuthContext.Provider value={{ authUser: authUser, dbUser: dbUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
