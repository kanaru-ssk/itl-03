// 検索ページ

// React取得
import { useEffect } from 'react';

// model取得
import { initMap } from 'model/PlaceModel';

// コンポーネント取得
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';
import SlideArea from 'components/organisms/Slider';

const Explore = () => {
	useEffect(() => {
		initMap();
	}, []);

	return (
		<>
			<main>
				<Map />
				<SlideArea />
			</main>
			<Footer />
		</>
	);
};

export default Explore;
