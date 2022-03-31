// react取得
import React from 'react';
import ReactDOM from 'react-dom';

// model取得
import { initFirebase } from 'model/InitModel';

// hooks取得
import { AuthProvider } from 'hooks/Auth';
import { SliderProvider } from 'hooks/Slider';

// component取得
import App from 'App';

// firebase初期化
initFirebase();

// authをcontextで全体に共有
ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<SliderProvider>
				<App />
			</SliderProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
