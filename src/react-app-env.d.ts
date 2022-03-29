/// <reference types="react-scripts" />

type node = {
	children: React.ReactNode;
};

type authUser = import('firebase/auth').User | null;

type dbUser = {
	at_created: import('firebase/firestore').FieldValue;
	at_updated: import('firebase/firestore').FieldValue;

	count_follows: number;
	count_followers: number;
	count_list: number;
	count_list_checked: number;

	user_uid: string;
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
	place_photo: string | undefined;
};

type post = {
	at_created: import('firebase/firestore').FieldValue;
	at_updated: import('firebase/firestore').FieldValue;

	post_images: string[] | null;
	post_caption: string;

	user_uid: string;
	user_id: string;
	user_name: string;
	user_icon: string;
} & place;

type item = {
	at_created: import('firebase/firestore').FieldValue;
	at_checked: import('firebase/firestore').FieldValue | null;

	is_checked: boolean;

	user_uid: string;
	user_twitter_sys_id: string;
} & place;

type ogp = {
	title: string | undefined;
	description: string | undefined;
	url: string | undefined;
	image: string | undefined;
};

type tab = 'list' | 'checkedList' | 'posts';
