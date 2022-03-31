// 認証関係の処理

import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// twitterログイン
export const loginWithTwitter = async () => {
	const { TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
	const auth = getAuth();
	const provider = new TwitterAuthProvider();

	provider.setCustomParameters({ force_login: 'true' });

	signInWithRedirect(auth, provider);
};

// ログアウト
export const logout = async () => {
	const { signOut } = await import('firebase/auth');
	const auth = getAuth();
	signOut(auth);
};
