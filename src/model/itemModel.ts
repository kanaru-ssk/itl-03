// アイテムデータfetch

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

			place_id: doc.data().place_id,
			place_name: doc.data().place_name,
			place_types: doc.data().place_types,
			place_rating: doc.data().place_rating,
			place_user_ratings_total: doc.data().place_user_rating_total,
			place_formatted_address: doc.data().place_formatted_address,
			place_formatted_phone_number: doc.data().place_formatted_phone_number,
			place_geometry: doc.data().place_geometry,
			place_photos: doc.data().place_photos,
			place_website: doc.data().place_website,
			place_opening_hours: doc.data().place_opening_hours,
			place_price_level: doc.data().place_price_level,
			place_reviews: doc.data().place_reviews,

			at_created: doc.data().at_created,
			at_updated: doc.data().at_updated,
			at_checked: doc.data().at_checked
		};
	});

	return items;
};

// アイテムデータ作成
export const createItem = async (uid: string | undefined, place: place) => {
	if (uid === undefined) return;
	const { getFirestore, addDoc, collection, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	addDoc(collection(db, 'users', uid, 'items'), {
		item_name: place.place_name,
		item_caption: 'キャプション',
		item_checked: false,
		item_removed: false,

		place_id: place.place_id,
		place_name: place.place_name,
		place_types: place.place_types,
		place_rating: place.place_rating,
		place_user_ratings_total: place.place_user_ratings_total,
		place_formatted_address: place.place_formatted_address,
		place_formatted_phone_number: place.place_formatted_phone_number,
		place_geometry: place.place_geometry,
		place_photos: place.place_photos,
		place_website: place.place_website,
		place_opening_hours: place.place_opening_hours,
		place_price_level: place.place_price_level,
		place_reviews: place.place_reviews,

		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),
		at_checked: null
	});
};
