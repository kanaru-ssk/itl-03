export const getOgp = async (url: string | undefined) => {
	if (!checkURL(url)) return;

	const { getFunctions, httpsCallable } = await import('firebase/functions');

	const functions = getFunctions();
	const get = httpsCallable(functions, 'getOgpFromExternalWebsite');

	const result = await get({ url: url });
	console.log(result);
	return convertOgp(result);
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

const convertOgp = (res: any): ogp => {
	const ogp: ogp = {
		title: res.data['og:title'],
		description: res.data['og:description'],
		url: res.data['og:url'],
		image: res.data['og:image']
	};
	return ogp;
};
