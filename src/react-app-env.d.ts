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

type geometry = {
	lat: number | undefined;
	lng: number | undefined;
};

type opening_hours = {
	periods: google.maps.places.OpeningPeriod[] | undefined;
	weekday_text: string[] | undefined;
};

type review = {
	author_name: string;
	rating: number;
	text: string;
	time: number;
};

type place = {
	place_id: string | undefined;
	place_name: string;
	place_types: string[] | undefined;
	place_rating: number | undefined;
	place_user_ratings_total: number | undefined;
	place_formatted_address: string | undefined;
	place_formatted_phone_number: string | undefined;
	place_geometry: geometry | undefined;
	place_photos: string[] | undefined;
	place_website: string | undefined;
	place_opening_hours: opening_hours | undefined;
	place_price_level: number | undefined;
	place_reviews: review[] | undefined;
};

type item = {
	iid: string;
	item_name: string;
	item_caption: string;
	item_checked: boolean;
	item_removed: boolean;
	checked_at: Date | import('firebase/firestore').FieldValue;
	create_at: Date | import('firebase/firestore').FieldValue;
	update_at: Date | import('firebase/firestore').FieldValue;
} & place;
