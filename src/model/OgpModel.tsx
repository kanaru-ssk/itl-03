export const getOgp = async (url: string | undefined) => {
	if (!checkURL(url)) return;

	const { getFunctions, httpsCallable } = await import('firebase/functions');

	const functions = getFunctions();
	const get = httpsCallable(functions, 'getOgpFromExternalWebsite');

	return get({ url: url });
};

const checkURL = (url: string | undefined) => {
	const pattern = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
	if (url === undefined) {
		return false;
	} else if (!pattern.test(url)) {
		return false;
	} else {
		return true;
	}
};
