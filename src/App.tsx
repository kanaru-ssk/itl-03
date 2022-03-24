// ルーティング

// css取得
import './App.scss';

// React取得
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// コンポーネント取得
import Loading from 'view/components/modules/Loading';
import Header from 'view/components/modules/Header';
import Footer from 'view/components/modules/Footer';
import Home from 'view/pages/Home';
import Explore from 'view/pages/Explore';
import Notice from 'view/pages/Notice';
import Message from 'view/pages/Message';
import User from 'view/pages/User';

// ルーティング
const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Loading />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/explore/:placeId" element={<Explore />} />
					<Route path="/notice" element={<Notice />} />
					<Route path="/message" element={<Message />} />
					<Route path="/:paramsUid" element={<User />} />
				</Routes>
			</main>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
