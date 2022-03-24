// ルーティング

// css取得
import './App.scss';

// React取得
import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// モデル取得
import { AuthContext } from './model/AuthModel';

// コンポーネント取得
import Home from './view/home/Home';
import User from './view/user/User';
import Explore from './view/explore/Explore';
import Loading from './view/common/Loading';

// ルーティング
const App = () => {
	const user = useContext(AuthContext);

	if (user?.authUser) {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/explore/:placeId" element={<Explore />} />
					<Route path="/:paramsUid" element={<User />} />
				</Routes>

				<nav>
					<Link to="/">home</Link>&nbsp;
					<Link to="/explore">explore</Link>&nbsp;
					<Link to={'/' + user.dbUser?.user_id}>mypage</Link>
				</nav>
			</BrowserRouter>
		);
	} else {
		return <Loading />;
	}
};

export default App;
