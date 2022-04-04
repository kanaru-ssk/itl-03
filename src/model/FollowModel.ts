// フォロー関係の処理

// 最も古いフォローデータ取得
export const getOldestFollow = async (
	uid: string | undefined,
	type: followType,
	order: string,
): Promise<follow | null> => {
	if (uid === undefined) return null;

	const { getFirestore, collection, getDocs, query, orderBy, limit } = await import('firebase/firestore');

	const db = getFirestore();
	const queryRef = query(collection(db, 'users', uid, type), orderBy(order, 'asc'), limit(1));
	const querySnap = await getDocs(queryRef);

	if (0 < querySnap.size) {
		const follow: follow = {
			at_created: querySnap.docs[0].data().at_created,
			at_updated: querySnap.docs[0].data().at_updated,

			is_read: querySnap.docs[0].data().is_read,

			user_uid: querySnap.docs[0].id,
			user_id: querySnap.docs[0].data().user_id,
			user_name: querySnap.docs[0].data().user_name,
			user_icon: querySnap.docs[0].data().user_icon,
			user_bio: querySnap.docs[0].data().user_bio,
			user_is_public: querySnap.docs[0].data().user_is_public,
		};

		return follow;
	} else {
		return null;
	}
};

// user_uidからフォローリスト取得
export const getFollows = async (
	uid: string | undefined,
	start: Timestamp | FieldValue,
	limitNum: number,
	type: followType,
	order: string,
): Promise<follow[]> => {
	if (uid === undefined) return [];

	const { getFirestore, collection, getDocs, query, orderBy, startAfter, limit } = await import('firebase/firestore');

	const db = getFirestore();
	const queryRef = query(
		collection(db, 'users', uid, type),
		orderBy(order, 'desc'),
		startAfter(start),
		limit(limitNum),
	);

	const querySnap = await getDocs(queryRef);

	if (0 < querySnap.size) {
		const follows: follow[] = querySnap.docs.map((doc) => {
			return {
				at_created: doc.data().at_created,
				at_updated: doc.data().at_checked,

				is_read: doc.data().is_read,

				user_uid: doc.id,
				user_id: doc.data().user_id,
				user_name: doc.data().user_name,
				user_icon: doc.data().user_icon,
				user_bio: doc.data().user_bio,
				user_is_public: doc.data().user_is_public,
			};
		});

		return follows;
	} else {
		return [];
	}
};

// フォロー
export const follow = async (authUid: string | undefined, paramsUser: dbUser): Promise<void> => {
	if (!authUid || !paramsUser) return;
	const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');

	const db = getFirestore();

	const followUser: Omit<follow, 'user_uid'> = {
		at_created: serverTimestamp(),
		at_updated: serverTimestamp(),

		is_read: false,

		user_id: paramsUser.user_id,
		user_name: paramsUser.user_name,
		user_icon: paramsUser.user_icon,
		user_bio: paramsUser.user_bio,
		user_is_public: paramsUser.user_is_public,
	};

	setDoc(doc(db, 'users', authUid, 'following', paramsUser.user_uid), followUser);
};

// フォローしてるかチェック
export const checkFollow = async (authUid: string, paramsUserId: string): Promise<boolean> => {
	if (!authUid || !paramsUserId) return false;
	const { getFirestore, query, collection, where, limit, getDocs } = await import('firebase/firestore');
	const db = getFirestore();
	const queryRef = query(
		collection(db, 'users', authUid, 'following'),
		where('user_id', '==', paramsUserId),
		limit(1),
	);

	const querySnap = await getDocs(queryRef);
	return 0 < querySnap.size;
};

// フォロー解除
export const deleteFollow = async (authUid: string | undefined, paramsUid: string | undefined): Promise<void> => {
	if (!authUid || !paramsUid) return;
	const { getFirestore, doc, deleteDoc } = await import('firebase/firestore');

	const db = getFirestore();
	deleteDoc(doc(db, 'users', authUid, 'following', paramsUid));
};
