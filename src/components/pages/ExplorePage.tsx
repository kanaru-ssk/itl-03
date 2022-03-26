// 検索ページ

// コンポーネント取得
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';
import Slider from 'components/molecules/Slider';
import SlideArea from 'components/organisms/Slider';

const ExplorePage = () => {
	return (
		<>
			<Main isHeaderShow={false}>
				<Map />
				<Slider>テスト</Slider>
			</Main>
			<Footer />
		</>
	);
};

export default ExplorePage;
