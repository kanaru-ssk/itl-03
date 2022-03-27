// ルーティング

// css取得
import './App.scss';

// react取得
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component取得
import Loading from 'components/organisms/Loading';
import TopPage from 'components/pages/TopPage';
import ExplorePage from 'components/pages/ExplorePage';
import NoticePage from 'components/pages/NoticePage';
import MessagePage from 'components/pages/MessagePage';
import UserPage from 'components/pages/UserPage';

// ルーティング
const App = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	return (
		<BrowserRouter>
			{!isLoaded && <Loading setIsLoaded={setIsLoaded} />}

			<Routes>
				<Route path="/" element={<TopPage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/explore/:paramsPlaceId" element={<ExplorePage />} />
				<Route path="/notice" element={<NoticePage />} />
				<Route path="/message" element={<MessagePage />} />
				<Route path="/:paramsUid" element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
