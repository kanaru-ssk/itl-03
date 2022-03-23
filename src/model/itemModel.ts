// ユーザーデータ関係の処理

// ドキュメントidからアイテムデータ取得
export const getItems = async (uid: string | undefined) => {
	if (uid === undefined) return [];

	const { getFirestore, collection, getDocs, query, where } = await import('firebase/firestore');
	const db = getFirestore();

	const q = query(collection(db, 'users', uid, 'items'), where('item_removed', '==', false));
	const snapshot = await getDocs(q);
	const items: item[] = snapshot.docs.map((doc) => {
		return {
			iid: doc.id,
			item_name: doc.data().item_name,
			item_caption: doc.data().item_caption,
			item_checked: doc.data().item_checked,
			item_removed: doc.data().item_removed,
			create_at: doc.data().create_at,
			update_at: doc.data().update_at,
			checked_at: doc.data().checked_at
		};
	});

	return items;
};

// アイテムデータ作成
export const createItem = async (uid: string | undefined, place: google.maps.places.PlaceResult) => {
	if (uid === undefined) return;
	const { getFirestore, addDoc, collection, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	addDoc(collection(db, 'users', uid, 'items'), {
		item_name: place.name,
		item_caption: 'キャプション',
		item_checked: false,
		item_removed: false,
		create_at: serverTimestamp(),
		update_at: serverTimestamp(),
		checked_at: null
	});
};
