/// <reference types="react-scripts" />

type node = {
	children: React.ReactNode;
};

type authUser = import('firebase/auth').User | null;

type dbUser = {
	at_created: import('firebase/firestore').FieldValue;
	at_updated: import('firebase/firestore').FieldValue;

	uid: string;
	user_id: string;
	user_name: string;
	user_icon: string;
	user_bio: string;
	user_twitter_disp_id: string;
	user_twitter_sys_id: string;
} | null;

type authContextProps = {
	authUser: authUser;
	dbUser: dbUser;
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

type place = {
	place_id: string | undefined;
	place_name: string;
	place_type: string;
	place_photos: string[] | undefined;
};

type post = {
	at_created: import('firebase/firestore').FieldValue;
	at_updated: import('firebase/firestore').FieldValue;
	at_checked: import('firebase/firestore').FieldValue | null;

	post_caption: string;
	post_checked: boolean;

	uid: string;
	user_id: string;
	user_name: string;
	user_icon: string;
} & place;

type ogp = {
	title: string | undefined;
	description: string | undefined;
	url: string | undefined;
	image: string | undefined;
};
