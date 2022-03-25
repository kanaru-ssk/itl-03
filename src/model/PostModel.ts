// アイテムデータfetch

// ドキュメントidからアイテムデータ取得
export const getPostsByUserId = async (user_id: string | undefined): Promise<post[]> => {
	if (user_id === undefined) return [];

	const { getFirestore, collection, getDocs, query, where } = await import('firebase/firestore');
	const db = getFirestore();

	const queryRef = query(collection(db, 'posts'), where('user_id', '==', user_id));
	const querySnap = await getDocs(queryRef);
	const posts: post[] = querySnap.docs.map((doc) => {
		return {
			at_created: doc.data().at_created,
			at_updated: doc.data().at_updated,
			at_checked: doc.data().at_checked,
			place_id: doc.data().place_id,
			place_name: doc.data().place_name,
			place_type: doc.data().place_type,
			place_photos: doc.data().place_photos,
			post_caption: doc.data().post_caption,
			post_checked: doc.data().post_checked,
			post_removed: doc.data().post_removed,
			uid: doc.data().uid,
			user_id: doc.data().user_id
		};
	});

	return posts;
};

// アイテムデータ作成
export const createPost = async (user: dbUser, place: place) => {
	if (user === null) return;
	const { getFirestore, addDoc, collection, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	const newPost: post = {
		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),
		at_checked: null,
		uid: user.uid,
		user_id: user.user_id,
		place_id: place.place_id,
		place_name: place.place_name,
		place_type: place.place_type,
		place_photos: place.place_photos,
		post_caption: 'キャプション',
		post_checked: false,
		post_removed: false
	};

	addDoc(collection(db, 'posts'), newPost);
};
