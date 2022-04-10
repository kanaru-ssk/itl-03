// react取得
import React from 'react';
import ReactDOM from 'react-dom';

// model取得
import { initFirebase } from 'model/InitModel';

// component取得
import App from 'App';

// firebase初期化
initFirebase();

// contextを全体に共有
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
