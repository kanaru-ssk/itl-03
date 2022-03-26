// DMページ

// コンポーネント取得
import BaseHeader from 'components/organisms/BaseHeader';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';

const MessagePage = () => {
	return (
		<>
			<BaseHeader />
			<Main isHeaderShow={true}>
				<h1>Message</h1>
			</Main>
			<Footer />
		</>
	);
};

export default MessagePage;
