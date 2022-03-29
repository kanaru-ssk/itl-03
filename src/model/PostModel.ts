// アイテムデータfetch

// user_idからアイテムデータ取得
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
			place_photo: doc.data().place_photo,

			post_images: doc.data().post_images,
			post_caption: doc.data().post_caption,
			post_checked: doc.data().post_checked,

			user_uid: doc.data().user_uid,
			user_id: doc.data().user_id,
			user_name: doc.data().user_name,
			user_icon: doc.data().user_icon
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

		place_id: place.place_id,
		place_name: place.place_name,
		place_type: place.place_type,
		place_photo: place.place_photo,

		post_images: null,
		post_caption: 'キャプション',

		user_uid: user.user_uid,
		user_id: user.user_id,
		user_name: user.user_name,
		user_icon: user.user_icon
	};

	addDoc(collection(db, 'posts'), newPost);
};
