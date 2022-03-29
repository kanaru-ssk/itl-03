// ユーザーデータ関係の処理

// ドキュメントidからユーザーデータ取得
export const getUserDataByUid = async (uid: string) => {
	const { getFirestore, getDoc, doc } = await import('firebase/firestore');
	const db = getFirestore();
	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const result: dbUser = {
			at_created: docSnap.data().at_created,
			at_updated: docSnap.data().at_updated,

			count_follows: docSnap.data().count_follow,
			count_followers: docSnap.data().count_followed,
			count_list: docSnap.data().count_post,
			count_list_checked: docSnap.data().count_post_checked,

			user_uid: docSnap.id,
			user_id: docSnap.data().user_id,
			user_name: docSnap.data().user_name,
			user_icon: docSnap.data().user_icon,
			user_bio: docSnap.data().user_bio,
			user_twitter_disp_id: docSnap.data().user_twitter_disp_id,
			user_twitter_sys_id: docSnap.data().user_twitter_sys_id,
			user_is_public: docSnap.data().user_is_public
		};
		return result;
	} else {
		return null;
	}
};

// ユーザーidからユーザーデータ取得
export const getUserDataByUserId = async (user_id: string | undefined): Promise<dbUser | null> => {
	const { getFirestore, collection, query, where, getDocs } = await import('firebase/firestore');
	const db = getFirestore();
	const queryRef = query(collection(db, 'users'), where('user_id', '==', user_id));

	const querySnap = await getDocs(queryRef);
	if (querySnap.size === 0) {
		return null;
	} else {
		const result: dbUser = {
			at_created: querySnap.docs[0].data().at_created,
			at_updated: querySnap.docs[0].data().at_updated,

			count_follows: querySnap.docs[0].data().count_follow,
			count_followers: querySnap.docs[0].data().count_followed,
			count_list: querySnap.docs[0].data().count_post,
			count_list_checked: querySnap.docs[0].data().count_post_checked,

			user_uid: querySnap.docs[0].id,
			user_id: querySnap.docs[0].data().user_id,
			user_name: querySnap.docs[0].data().user_name,
			user_icon: querySnap.docs[0].data().user_icon,
			user_bio: querySnap.docs[0].data().user_bio,
			user_twitter_disp_id: querySnap.docs[0].data().user_twitter_disp_id,
			user_twitter_sys_id: querySnap.docs[0].data().user_twitter_sys_id,
			user_is_public: querySnap.docs[0].data().user_is_public
		};
		return result;
	}
};

// ユーザーデータ作成
export const createUserData = async (uid: string, newUserData: dbUser) => {
	if (newUserData === null) return;

	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');
	const db = getFirestore();

	newUserData.at_created = serverTimestamp();
	newUserData.at_updated = serverTimestamp();

	setDoc(doc(db, 'users', uid), newUserData);
};
