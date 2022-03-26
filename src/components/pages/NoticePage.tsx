// 通知ページ

// コンポーネント取得
import BaseHeader from 'components/organisms/BaseHeader';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';

const NoticePage = () => {
	return (
		<>
			<BaseHeader />
			<Main isHeaderShow={true}>
				<h1>Notice</h1>
			</Main>
			<Footer />
		</>
	);
};

export default NoticePage;
