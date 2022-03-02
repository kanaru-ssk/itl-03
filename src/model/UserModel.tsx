// ユーザーデータ関係の処理

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

type userId = {
	uid: string;
	publishedAt: FieldValue;
};

// ユーザーデータ取得
export const getUserData = async (uid: string) => {
	const { getFirestore, getDoc, doc } = await import('firebase/firestore');
	const db = getFirestore();
	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const data = {
			user_id: docSnap.data().user_id,
			user_name: docSnap.data().user_name,
			user_icon: docSnap.data().user_icon,
			user_bio: docSnap.data().user_bio,
			user_twitter_disp_id: docSnap.data().user_twitter_disp_id,
			user_twitter_sys_id: docSnap.data().user_twitter_sys_id,
			user_regist_date: docSnap.data().user_regist_date,
			user_update_date: docSnap.data().user_update_date
		};
		return data;
	} else {
		return false;
	}
};

// ユーザーデータ作成
export const createUserData = async (uid: string, newUserData: dbUser) => {
	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	newUserData.user_regist_date = serverTimestamp();
	newUserData.user_update_date = serverTimestamp();

	setDoc(doc(db, 'users', uid), newUserData);
};
