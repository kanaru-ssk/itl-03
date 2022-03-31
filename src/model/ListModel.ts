// アイテムデータfetch

// user_idからアイテムデータ取得
export const getList = async (uid: string | undefined): Promise<item[]> => {
	if (uid === undefined) return [];

	const { getFirestore, collection, getDocs, query, orderBy, limit } = await import('firebase/firestore');

	const db = getFirestore();
	const queryRef = query(collection(db, 'users', uid, 'list'), orderBy('at_created', 'desc'), limit(20));
	const querySnap = await getDocs(queryRef);

	const items: item[] = querySnap.docs.map((doc) => {
		return {
			at_created: doc.data().at_created,
			at_checked: doc.data().at_checked,

			item_iid: doc.id,
			item_is_checked: doc.data().is_checked,

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

	const newItem: Omit<item, 'item_iid'> = {
		at_created: serverTimestamp(),
		at_checked: null,

		item_is_checked: false,

		user_uid: user.user_uid,
		user_twitter_sys_id: user.user_twitter_sys_id,

		place_id: place.place_id,
		place_name: place.place_name,
		place_type: place.place_type,
		place_photo: place.place_photo
	};

	addDoc(collection(db, 'users', user.user_uid, 'list'), newItem);
};

export const deleteItem = () => {};
