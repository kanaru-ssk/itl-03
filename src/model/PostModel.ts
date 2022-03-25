// アイテムデータfetch

// ドキュメントidからアイテムデータ取得
export const getPostsByUserId = async (user_id: string | undefined): Promise<post[]> => {
	if (user_id === undefined) return [];

	const { getFirestore, collection, getDocs, query, where } = await import('firebase/firestore');
	const db = getFirestore();

	const q = query(collection(db, 'posts'), where('user_id', '==', user_id));
	const snapshot = await getDocs(q);
	const posts: post[] = snapshot.docs.map((doc) => {
		return {
			user_id: doc.data().user_id,
			place_name: doc.data().place_name
		};
	});

	return posts;
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
