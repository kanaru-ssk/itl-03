// 検索ページ

// react取得
import { useParams } from 'react-router-dom';

// component取得
import BaseHeader from 'components/organisms/BaseHeader';
import Search from 'components/organisms/Search';
import Details from 'components/organisms/Details';
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';

const ExplorePage = () => {
	const { paramsPlaceId } = useParams();
	return (
		<>
			<BaseHeader />
			<Map />
			{paramsPlaceId ? <Details paramsPlaceId={paramsPlaceId} /> : <Search />}

			<Footer />
		</>
	);
};

export default ExplorePage;
