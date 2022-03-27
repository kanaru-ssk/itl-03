// ログインページ

// css取得
import style from './Map.module.scss';

// react取得
import { useEffect } from 'react';

// model取得
import { initMap } from 'model/PlaceModel';

const Login = () => {
	useEffect(() => {
		initMap();
	}, []);
	return <div id="map" className={style.map}></div>;
};

export default Login;
