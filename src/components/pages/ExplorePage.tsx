// 検索ページ

// react取得
import { useParams } from 'react-router-dom';

// component取得
import Search from 'components/organisms/Search';
import Details from 'components/organisms/Details';
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';

const ExplorePage = () => {
	const { paramsPlaceId } = useParams();
	return (
		<>
			<Map />
			{paramsPlaceId ? <Details paramsPlaceId={paramsPlaceId} /> : <Search />}

			<Footer />
		</>
	);
};

export default ExplorePage;
