// アイテムデータfetch

// 最も古いアイテムデータ取得
export const getOldestItem = async (uid: string | undefined, isChecked: boolean): Promise<item | null> => {
	if (uid === undefined) return null;

	const { getFirestore, collection, getDocs, query, where, orderBy, limit } = await import('firebase/firestore');

	const db = getFirestore();
	const queryRef = query(
		collection(db, 'users', uid, 'list'),
		where('is_checked', '==', isChecked),
		orderBy('at_created', 'asc'),
		limit(1),
	);
	const querySnap = await getDocs(queryRef);

	if (0 < querySnap.size) {
		const item: item = {
			at_created: querySnap.docs[0].data().at_created,
			at_checked: querySnap.docs[0].data().at_checked,

			doc_id: querySnap.docs[0].id,
			is_checked: querySnap.docs[0].data().is_checked,

			user_uid: querySnap.docs[0].data().user_uid,
			user_twitter_sys_id: querySnap.docs[0].data().user_twitter_sys_id,

			place_id: querySnap.docs[0].data().place_id,
			place_name: querySnap.docs[0].data().place_name,
			place_type: querySnap.docs[0].data().place_type,
			place_photo: querySnap.docs[0].data().place_photo,
		};

		return item;
	} else {
		return null;
	}
};

// user_idからアイテムデータ取得
export const getList = async (
	uid: string | undefined,
	isChecked: boolean,
	start: Timestamp | FieldValue,
	limitNum: number,
): Promise<item[]> => {
	if (uid === undefined) return [];

	const { getFirestore, collection, getDocs, query, where, orderBy, startAfter, limit } = await import(
		'firebase/firestore'
	);

	const db = getFirestore();
	const queryRef = query(
		collection(db, 'users', uid, 'list'),
		where('is_checked', '==', isChecked),
		orderBy('at_created', 'desc'),
		startAfter(start),
		limit(limitNum),
	);

	const querySnap = await getDocs(queryRef);

	const items: item[] = querySnap.docs.map((doc) => {
		return {
			at_created: doc.data().at_created,
			at_checked: doc.data().at_checked,

			doc_id: doc.id,
			is_checked: doc.data().is_checked,

			user_uid: doc.data().user_uid,
			user_twitter_sys_id: doc.data().user_twitter_sys_id,

			place_id: doc.data().place_id,
			place_name: doc.data().place_name,
			place_type: doc.data().place_type,
			place_photo: doc.data().place_photo,
		};
	});

	return items;
};

// アイテムデータ作成
export const createItem = async (user: dbUser | undefined, place: place) => {
	if (!user) return;

	// const { getFunctions, httpsCallable } = await import('firebase/functions');
	// const functions = getFunctions();
	// functions.region = 'asia-northeast1';
	// const get = httpsCallable(functions, 'getPhotoUrl');
	// const result: any = await get({ url: place.place_photo });
	// const resultURL: RequestInfo = result.data;
	const photoURL: RequestInfo = await getPhotoURL(place.place_photo);
	const photo: string = await getImageBase64(photoURL);

	const { getFirestore, addDoc, collection, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	const newItem: Omit<item, 'doc_id'> = {
		at_created: serverTimestamp(),
		at_checked: null,

		is_checked: false,

		user_uid: user.user_uid,
		user_twitter_sys_id: user.user_twitter_sys_id,

		place_id: place.place_id,
		place_name: place.place_name,
		place_type: place.place_type,
		place_photo: photo,
	};

	addDoc(collection(db, 'users', user.user_uid, 'list'), newItem);
};

// アイテムを達成済みにする
export const checkItem = async (item: item) => {
	const { getFirestore, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	updateDoc(doc(db, 'users', item.user_uid, 'list', item.doc_id), {
		is_checked: true,
		at_checked: serverTimestamp(),
	});
};

// アイテム削除
export const deleteItem = async (item: item) => {
	const { getFirestore, doc, deleteDoc } = await import('firebase/firestore');

	const db = getFirestore();
	deleteDoc(doc(db, 'users', item.user_uid, 'list', item.doc_id));
};

const getPhotoURL = async (url: string): Promise<RequestInfo> => {
	const { getFunctions, httpsCallable } = await import('firebase/functions');
	const functions = getFunctions();
	functions.region = 'asia-northeast1';
	const get = httpsCallable(functions, 'getPhotoUrl');
	const result: any = await get({ url: url });
	const resultURL: RequestInfo = result.data;
	return resultURL;
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
