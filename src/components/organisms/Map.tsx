// ログインページ

// react取得
import { useEffect } from 'react';

// model取得
import { initMap } from 'model/PlaceModel';

// css取得
import style from './Map.module.scss';

const Login = () => {
	useEffect(() => {
		initMap();
	}, []);
	return <div id="map" className={style.map}></div>;
};

export default Login;
