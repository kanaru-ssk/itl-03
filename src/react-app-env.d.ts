/// <reference types="react-scripts" />

type node = {
	children: React.ReactNode;
};

type dbUser = {
	uid: string;
	user_id: string;
	user_name: string;
	user_icon: string;
	user_bio: string;
	user_twitter_disp_id: string;
	user_twitter_sys_id: string;
	create_at: Date | import('firebase/firestore').FieldValue;
	update_at: Date | import('firebase/firestore').FieldValue;
};

type authContextProps = {
	authUser: import('firebase/auth').User | undefined;
	dbUser: dbUser | undefined;
};

type placeType =
	| ''
	| 'cafe'
	| 'restaurant'
	| 'bar'
	| 'library'
	| 'art_gallery'
	| 'aquarium'
	| 'park'
	| 'movie_theater'
	| 'lodging';

type item = {
	iid: string;
	item_name: string;
	item_checked: boolean;
	item_removed: boolean;
	checked_at: Date | import('firebase/firestore').FieldValue;
	create_at: Date | import('firebase/firestore').FieldValue;
	update_at: Date | import('firebase/firestore').FieldValue;
};
