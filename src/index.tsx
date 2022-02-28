// React系取得
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// コンポーネント取得
import App from './App';
import UserPage from './User';

// firebase系取得
import { initFirebase } from './model/initModel';


// firebase初期化
initFirebase();





// ルーティング
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/:uid' element={<UserPage  />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
