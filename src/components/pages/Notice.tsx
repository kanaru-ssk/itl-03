// 通知ページ

// コンポーネント取得
import Header from 'components/organisms/Header';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';

const Notice = () => {
	return (
		<>
			<Header />
			<Main isHeaderShow={true}>
				<h1>Notice</h1>
			</Main>
			<Footer />
		</>
	);
};

export default Notice;
