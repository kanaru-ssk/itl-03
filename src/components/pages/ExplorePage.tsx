// 検索ページ

import { useParams } from 'react-router-dom';

// コンポーネント取得
import Search from 'components/organisms/Search';
import Details from 'components/organisms/Details';
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';
import Slider from 'components/molecules/Slider';

const ExplorePage = () => {
	const { paramsPlaceId } = useParams();
	return (
		<>
			<Map />
			<Slider>{paramsPlaceId ? <Details paramsPlaceId={paramsPlaceId} /> : <Search />}</Slider>

			<Footer />
		</>
	);
};

export default ExplorePage;
