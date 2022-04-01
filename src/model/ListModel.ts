// アイテムデータfetch

// user_idからアイテムデータ取得
export const getList = async (uid: string | undefined, isChecked: boolean): Promise<item[]> => {
	if (uid === undefined) return [];

	const { getFirestore, collection, getDocs, query, where, orderBy, limit } = await import('firebase/firestore');

	const db = getFirestore();
	const queryRef = query(
		collection(db, 'users', uid, 'list'),
		where('is_checked', '==', isChecked),
		orderBy('at_created', 'desc'),
		limit(20)
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
			place_photo: doc.data().place_photo
		};
	});

	return items;
};

// アイテムデータ作成
export const createItem = async (user: dbUser | undefined, place: place) => {
	if (!user) return;
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
		place_photo: place.place_photo
	};

	addDoc(collection(db, 'users', user.user_uid, 'list'), newItem);
};

// アイテムを達成済みにする
export const checkItem = async (item: item) => {
	const { getFirestore, doc, updateDoc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();
	updateDoc(doc(db, 'users', item.user_uid, 'list', item.doc_id), {
		is_checked: true,
		at_checked: serverTimestamp()
	});
};

// アイテム削除
export const deleteItem = async (item: item) => {
	const { getFirestore, doc, deleteDoc } = await import('firebase/firestore');

	const db = getFirestore();
	deleteDoc(doc(db, 'users', item.user_uid, 'list', item.doc_id));
};
