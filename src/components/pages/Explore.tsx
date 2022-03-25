// 検索ページ

// コンポーネント取得
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';
import Map from 'components/organisms/Map';
import SlideArea from 'components/organisms/Slider';

const Explore = () => {
	return (
		<>
			<Main isHeaderShow={false}>
				<Map />
				<SlideArea />
			</Main>
			<Footer />
		</>
	);
};

export default Explore;
