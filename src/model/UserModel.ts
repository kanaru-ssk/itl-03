// ユーザーデータ関係の処理

// ドキュメントidからユーザーデータ取得
export const getUserDataByUid = async (uid: string) => {
	const { getFirestore, getDoc, doc } = await import('firebase/firestore');
	const db = getFirestore();
	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const result: dbUser = {
			uid: uid,
			user_id: docSnap.data().user_id,
			user_name: docSnap.data().user_name,
			user_icon: docSnap.data().user_icon,
			user_bio: docSnap.data().user_bio,
			user_twitter_disp_id: docSnap.data().user_twitter_disp_id,
			user_twitter_sys_id: docSnap.data().user_twitter_sys_id,
			create_at: docSnap.data().create_at,
			update_at: docSnap.data().update_at
		};
		return result;
	} else {
		return false;
	}
};

// ユーザーidからユーザーデータ取得
export const getUserDataByUserId = async (user_id: string | undefined): Promise<dbUser | undefined> => {
	const { getFirestore, collection, query, where, getDocs } = await import('firebase/firestore');
	const db = getFirestore();
	const q = query(collection(db, 'users'), where('user_id', '==', user_id));

	const querySnapshot = await getDocs(q);
	if (querySnapshot.size === 0) {
		return undefined;
	} else {
		const result: dbUser = {
			uid: querySnapshot.docs[0].id,
			user_id: querySnapshot.docs[0].data().user_id,
			user_name: querySnapshot.docs[0].data().user_name,
			user_icon: querySnapshot.docs[0].data().user_icon,
			user_bio: querySnapshot.docs[0].data().user_bio,
			user_twitter_disp_id: querySnapshot.docs[0].data().user_twitter_disp_id,
			user_twitter_sys_id: querySnapshot.docs[0].data().user_twitter_sys_id,
			create_at: querySnapshot.docs[0].data().create_at,
			update_at: querySnapshot.docs[0].data().update_at
		};
		return result;
	}
};

// ユーザーデータ作成
export const createUserData = async (newUserData: dbUser) => {
	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	newUserData.create_at = serverTimestamp();
	newUserData.update_at = serverTimestamp();

	setDoc(doc(db, 'users', newUserData.uid), newUserData);
};
