// ログインページ

import './Map.scss';

import { useEffect } from 'react';

import { initMap } from 'model/PlaceModel';

const Login = () => {
	useEffect(() => {
		initMap();
	}, []);
	return <div id="map"></div>;
};

export default Login;
