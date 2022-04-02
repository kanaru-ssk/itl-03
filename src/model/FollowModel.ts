// フォロー関係の処理

// フォロー
export const follow = async (authUid: string | undefined, paramsUser: dbUser): Promise<void> => {
	if (!authUid || !paramsUser) return;
	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	const followUser: Partial<dbUser> & { is_read: boolean } = {
		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),

		is_read: false,

		user_id: paramsUser.user_id,
		user_name: paramsUser.user_name,
		user_icon: paramsUser.user_icon,
		user_bio: paramsUser.user_bio,
		user_is_public: paramsUser.user_is_public
	};

	setDoc(doc(db, 'users', authUid, 'follows', paramsUser.user_uid), followUser);
};

// フォローしてるかチェック
export const checkFollow = async (authUid: string, paramsUserId: string): Promise<boolean> => {
	if (!authUid || !paramsUserId) return false;
	const { getFirestore, query, collection, where, limit, getDocs } = await import('firebase/firestore');
	const db = getFirestore();
	const queryRef = query(collection(db, 'users', authUid, 'follows'), where('user_id', '==', paramsUserId), limit(1));

	const querySnap = await getDocs(queryRef);
	return 1 <= querySnap.size;
};

// フォロー解除
export const deleteFollow = async (authUid: string | undefined, paramsUid: string | undefined): Promise<void> => {
	if (!authUid || !paramsUid) return;
	const { getFirestore, doc, deleteDoc } = await import('firebase/firestore');

	const db = getFirestore();
	deleteDoc(doc(db, 'users', authUid, 'follows', paramsUid));
};

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

			count_follows: docSnap.data().count_follows,
			count_followers: docSnap.data().count_followers,
			count_list: docSnap.data().count_list,
			count_list_checked: docSnap.data().count_list_checked,

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

			count_follows: querySnap.docs[0].data().count_follows,
			count_followers: querySnap.docs[0].data().count_followers,
			count_list: querySnap.docs[0].data().count_list,
			count_list_checked: querySnap.docs[0].data().count_list_checked,

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

	const user: Omit<dbUser, 'user_uid'> = {
		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),

		count_follows: newUserData.count_follows,
		count_followers: newUserData.count_followers,
		count_list: newUserData.count_list,
		count_list_checked: newUserData.count_list_checked,

		user_id: newUserData.user_id,
		user_name: newUserData.user_name,
		user_icon: newUserData.user_icon,
		user_bio: newUserData.user_bio,
		user_twitter_disp_id: newUserData.user_twitter_disp_id,
		user_twitter_sys_id: newUserData.user_twitter_sys_id,
		user_is_public: newUserData.user_is_public
	};

	setDoc(doc(db, 'users', uid), user);
};

// ユーザーデータ更新
export const updateUserData = async (dbUser: dbUser, part: Partial<dbUser>) => {
	if (dbUser === null) return;

	const { getFirestore, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	updateDoc(doc(db, 'users', dbUser.user_uid), {
		...part,
		at_updated: serverTimestamp()
	});
};

export const generateShareLink = async (uid: string | undefined, user_id: string | undefined) => {
	if (uid === undefined) return;

	const { Timestamp } = await import('firebase/firestore');
	const { getList } = await import('model/ListModel');
	const now = Timestamp.now();
	const results = await getList(uid, false, now, 3);

	let items: string = '';
	results.forEach((value) => {
		items += '・' + value.place_name + '%0A';
	});
	items += '・...%0A';

	const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + user_id;
	const hashtag = '行きたいとこリスト';
	const text = '行きたいとこリストを更新しました!';
	const URL =
		'http://twitter.com/share?url=' + linkUrl + '&text=' + text + '%0A' + items + '%0A%20%23' + hashtag + '%20%0A';
	return URL;
};
