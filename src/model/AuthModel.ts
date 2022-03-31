// 認証関係の処理

// twitterログイン
export const loginWithTwitter = async () => {
	const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
	const auth = getAuth();
	const provider = new TwitterAuthProvider();

	provider.setCustomParameters({ force_login: 'true' });

	signInWithRedirect(auth, provider);
};

// ログアウト
export const logout = async () => {
	const { getAuth, signOut } = await import('firebase/auth');
	const auth = getAuth();
	signOut(auth);
	location.href = '/';
};
