// firebase初期化

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeFirestore } from 'firebase/firestore';

// firebase設定
const config = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_DOMAIN,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FB_STORAGE,
	messagingSenderId: process.env.REACT_APP_FB_MESSAGING_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

// firebase初期化
export const initFirebase = (): void => {
	const app = initializeApp(config);
	getAnalytics(app);
	initializeFirestore(app, { ignoreUndefinedProperties: true });
};
