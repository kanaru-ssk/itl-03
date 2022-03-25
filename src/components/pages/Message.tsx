// DMページ

// コンポーネント取得
import Header from 'components/organisms/Header';
import Main from 'components/atoms/Main';
import Footer from 'components/organisms/Footer';

const Message = () => {
	return (
		<>
			<Header />
			<Main isHeaderShow={true}>
				<h1>Message</h1>
			</Main>
			<Footer />
		</>
	);
};

export default Message;
