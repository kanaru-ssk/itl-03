// ルーティング

// css取得
import './App.scss';

// React取得
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// コンポーネント取得
import Loading from 'components/modules/Loading';
import Header from 'components/modules/Header';
import Footer from 'components/modules/Footer';
import Home from 'components/pages/Home';
import Explore from 'components/pages/Explore';
import Notice from 'components/pages/Notice';
import Message from 'components/pages/Message';
import User from 'components/pages/User';

// ルーティング
const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	return (
		<BrowserRouter>
			<Header />

			{isLoading && <Loading setIsLoading={setIsLoading} />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/explore/:placeId" element={<Explore />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/message" element={<Message />} />
				<Route path="/:paramsUid" element={<User />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
