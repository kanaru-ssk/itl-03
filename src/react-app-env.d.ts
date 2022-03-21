/// <reference types="react-scripts" />

type node = {
	children: React.ReactNode;
};

type dbUser = {
	user_id: string;
	user_name: string;
	user_icon: string;
	user_bio: string;
	user_twitter_disp_id: string;
	user_twitter_sys_id: Date | FieldValue;
	user_regist_date: Date | FieldValue;
	user_update_date: Date | FieldValue;
};

type authContextProps = {
	authUser: User | undefined;
	dbUser: dbUser | undefined;
};

type placeType = '' | 'cafe' | 'restaurant' | 'bar' | 'library' | 'art_gallery' | 'aquarium' | 'park' | 'movie_theater';
