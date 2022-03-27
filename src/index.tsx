// react取得
import React from 'react';
import ReactDOM from 'react-dom';

// component取得
import App from 'App';

// firebase取得
import { initFirebase } from 'model/InitModel';
import { AuthProvider } from 'model/AuthModel';

// firebase初期化
initFirebase();

// authをcontextで全体に共有
ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
