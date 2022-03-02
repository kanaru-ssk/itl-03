// ユーザーデータ関係の処理

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
export const createUserData = async (user: any) => {
	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	const providerData = user.reloadUserInfo.providerUserInfo[0];

	setDoc(doc(db, 'users', user.uid), {
		user_id: providerData.screenName,
		user_name: providerData.displayName,
		user_icon: providerData.photoUrl,
		user_bio: '',
		user_twitter_disp_id: providerData.screenName,
		user_twitter_sys_id: providerData.rawId,
		user_regist_date: serverTimestamp(),
		user_update_date: serverTimestamp()
	});
};
