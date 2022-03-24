// ルーティング

// css取得
import './App.scss';

// 画像取得
import logoImg from 'img/logo.svg';
import userImg from 'img/user.svg';
import homeImg from 'img/home.svg';
import exploreImg from 'img/explore.svg';
import noticeImg from 'img/notice.svg';
import messageImg from 'img/message.svg';

// React取得
import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// モデル取得
import { AuthContext } from 'model/AuthModel';

// コンポーネント取得
import Home from 'view/pages/Home';
import User from 'view/pages/User';
import Explore from 'view/pages/Explore';
import Loading from 'view/components/modules/Loading';

// ルーティング
const App = () => {
	const user = useContext(AuthContext);

	return (
		<BrowserRouter>
			<header>
				<img src={logoImg} alt="" />
				<Link to={'/' + user.dbUser?.user_id}>
					<img src={userImg} alt="" />
				</Link>
			</header>

			<Loading />
			{/* {user?.authUser ? '' : <Loading />} */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/explore/:placeId" element={<Explore />} />
				<Route path="/:paramsUid" element={<User />} />
			</Routes>

			<footer>
				<nav>
					<ul>
						<li>
							<Link to="/">
								<img src={homeImg} alt="" />
							</Link>
						</li>

						<li>
							<Link to="/explore">
								<img src={exploreImg} alt="" />
							</Link>
						</li>

						<li>
							<img src={noticeImg} alt="" />
						</li>

						<li>
							<img src={messageImg} alt="" />
						</li>
					</ul>
				</nav>
			</footer>
		</BrowserRouter>
	);
};

export default App;
