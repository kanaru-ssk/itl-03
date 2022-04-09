// ユーザーデータ関係の処理

// ドキュメントidからユーザーデータ取得
export const getUserDataByUid = async (uid: string | undefined) => {
	if (uid === undefined) return null;

	const { getFirestore, getDoc, doc } = await import('firebase/firestore');
	const db = getFirestore();
	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const result: dbUser = {
			at_created: docSnap.data().at_created,
			at_updated: docSnap.data().at_updated,

			list_title: docSnap.data().list_title,
			is_public: docSnap.data().is_public,

			user_uid: docSnap.id,
			user_id: docSnap.data().user_id,
			user_name: docSnap.data().user_name,
			user_icon: docSnap.data().user_icon,
			user_bio: docSnap.data().user_bio,
			user_twitter_disp_id: docSnap.data().user_twitter_disp_id,
			user_twitter_sys_id: docSnap.data().user_twitter_sys_id,
		};
		return result;
	} else {
		return null;
	}
};

// ユーザーidからユーザーデータ取得
export const getUserDataByUserId = async (user_id: string | undefined): Promise<dbUser> => {
	if (user_id === undefined) return null;

	const { getFirestore, collection, query, where, getDocs, limit } = await import('firebase/firestore');
	const db = getFirestore();
	const queryRef = query(collection(db, 'users'), where('user_id', '==', user_id), limit(1));

	const querySnap = await getDocs(queryRef);
	if (querySnap.size === 0) {
		return null;
	} else {
		const result: dbUser = {
			at_created: querySnap.docs[0].data().at_created,
			at_updated: querySnap.docs[0].data().at_updated,

			list_title: querySnap.docs[0].data().list_title,
			is_public: querySnap.docs[0].data().is_public,

			user_uid: querySnap.docs[0].id,
			user_id: querySnap.docs[0].data().user_id,
			user_name: querySnap.docs[0].data().user_name,
			user_icon: querySnap.docs[0].data().user_icon,
			user_bio: querySnap.docs[0].data().user_bio,
			user_twitter_disp_id: querySnap.docs[0].data().user_twitter_disp_id,
			user_twitter_sys_id: querySnap.docs[0].data().user_twitter_sys_id,
		};
		return result;
	}
};

// ユーザーデータ作成
export const createUserData = async (authUser: authUser, provider: any) => {
	if (authUser === null) return;

	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');
	const db = getFirestore();

	const icon: string = await getImageBase64(authUser.photoURL);

	const newUserData: Omit<dbUser, 'user_uid'> = {
		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),

		list_title: '行きたいとこリスト',
		is_public: true,

		user_id: provider.screenName,
		user_name: authUser.displayName,
		user_icon: icon,
		user_bio: '',
		user_twitter_disp_id: provider.screenName,
		user_twitter_sys_id: authUser.providerData[0].uid,
	};

	setDoc(doc(db, 'users', authUser.uid), newUserData);
};

// ユーザーデータ更新
export const updateUserData = async (dbUser: dbUser, part: Partial<dbUser>) => {
	if (dbUser === null) return;

	const { getFirestore, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	updateDoc(doc(db, 'users', dbUser.user_uid), {
		...part,
		at_updated: serverTimestamp(),
	});
};

// Twitter共有リンク作成
export const generateShareLink = async (user: dbUser) => {
	if (user === null) return;

	const { Timestamp } = await import('firebase/firestore');
	const { getList } = await import('model/ListModel');
	const now = Timestamp.now();
	const results = await getList(user?.user_uid, false, now, 3);

	let items: string = '';
	results.forEach((value) => {
		items += '・' + value.place_name + '%0A';
	});
	items += '・...%0A';

	const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + user.user_id;
	const hashtag = '行きたいとこリスト';
	const text = user.list_title + 'を更新しました!';
	const URL =
		'http://twitter.com/share?url=' + linkUrl + '&text=' + text + '%0A' + items + '%0A%20%23' + hashtag + '%20%0A';
	return URL;
};

//uidからカウントデータ取得
export const getCountsByUid = async (uid: string | undefined): Promise<userCount> => {
	if (uid === undefined) return null;

	const { getFirestore, getDoc, doc } = await import('firebase/firestore');
	const db = getFirestore();
	const docRef = doc(db, 'userCounts', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const result: userCount = {
			user_uid: docSnap.id,
			user_id: docSnap.data().user_id,
			count_list: docSnap.data().count_list,
			count_list_checked: docSnap.data().count_list_checked,
			count_following: docSnap.data().count_following,
			count_followers: docSnap.data().count_followers,
		};
		return result;
	} else {
		return null;
	}
};

// ユーザーidからカウントデータ取得
export const getCountsByUserId = async (user_id: string | undefined): Promise<userCount> => {
	const { getFirestore, collection, query, where, getDocs, limit } = await import('firebase/firestore');
	const db = getFirestore();
	const queryRef = query(collection(db, 'userCounts'), where('user_id', '==', user_id), limit(1));

	const querySnap = await getDocs(queryRef);
	if (querySnap.size === 0) {
		return null;
	} else {
		const result: userCount = {
			user_uid: querySnap.docs[0].id,
			user_id: querySnap.docs[0].data().user_id,
			count_list: querySnap.docs[0].data().count_list,
			count_list_checked: querySnap.docs[0].data().count_list_checked,
			count_following: querySnap.docs[0].data().count_following,
			count_followers: querySnap.docs[0].data().count_followers,
		};
		return result;
	}
};

// 画像をbase64stringに変換
const getImageBase64 = async (url: RequestInfo | null) => {
	if (url === null) return '';
	const response = await fetch(url);
	const contentType = response.headers.get('content-type');
	const arrayBuffer = await response.arrayBuffer();
	const APPLY_MAX = 1024;
	let encodedStr = '';
	// ArrayBufferの中身を1024バイトに区切って少しずつ文字列にしていく
	for (let i: number = 0; i < arrayBuffer.byteLength; i += APPLY_MAX) {
		encodedStr += String.fromCharCode.apply(null, [...new Uint8Array(arrayBuffer.slice(i, i + APPLY_MAX))]);
	}
	let base64String = window.btoa(encodedStr);
	return `data:${contentType};base64,${base64String}`;
};
