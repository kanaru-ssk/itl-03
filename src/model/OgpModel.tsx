export const getOgp = async (url: string | undefined) => {
	if (!checkURL(url)) return;

	const { getFunctions, httpsCallable } = await import('firebase/functions');

	const functions = getFunctions();
	const get = httpsCallable(functions, 'getOgpFromExternalWebsite');

	return get({ url: url });
};

const checkURL = (url: string | undefined) => {
	if (url === undefined) {
		return false;
	} else if (url.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i) == null) {
		return false;
	} else {
		return true;
	}
};
