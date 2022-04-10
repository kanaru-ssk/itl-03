// ルーティング

// react取得
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// hooks取得
import { AuthProvider } from 'hooks/Auth';
import { SliderProvider } from 'hooks/Slider';
import { ModalProvider } from 'hooks/Modal';

// component取得
import LoadPage from 'components/organisms/LoadPage';
import TopPage from 'components/pages/TopPage';
import ExplorePage from 'components/pages/ExplorePage';
import NoticePage from 'components/pages/NoticePage';
import MessagePage from 'components/pages/MessagePage';
import UserPage from 'components/pages/UserPage';
import ShowPage from 'components/pages/ShowPage';
import UserFollowingPage from 'components/pages/UserFollowingPage';
import UserFollowersPage from 'components/pages/UserFollowersPage';
import HelpPage from 'components/pages/HelpPage';
import NotFoundPage from 'components/pages/NotFoundPage';

// css取得
import './App.scss';

// ルーティング
const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ModalProvider>
					<SliderProvider>
						<Routes>
							<Route path="/" element={<TopPage />} />
							<Route path="/explore" element={<ExplorePage />} />
							<Route path="/explore/:paramsPlaceId" element={<ExplorePage />} />
							<Route path="/notice" element={<NoticePage />} />
							<Route path="/message" element={<MessagePage />} />
							<Route path="/show/:paramsUid" element={<ShowPage />} />
							<Route path="/:paramsUserId" element={<UserPage />} />
							<Route path="/:paramsUserId/following" element={<UserFollowingPage />} />
							<Route path="/:paramsUserId/followers" element={<UserFollowersPage />} />
							<Route path="/help" element={<HelpPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>

						<LoadPage />
					</SliderProvider>
				</ModalProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
