// React Router取得
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './model/AuthModel';
// コンポーネント取得
import Home from './view/Home';
import User from './view/User';
import Explore from './view/Explore';

// ルーティング
const App = () => {
	const user = useContext(AuthContext);
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">home</Link>&nbsp;
				<Link to="/explore">explore</Link>&nbsp;
				<Link to={'/' + user.dbUser?.user_id}>mypage</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/:paramsUid" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
