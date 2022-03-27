// ヘッダー

// img取得
import logoImg from 'img/logo.svg';

// react取得
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// model取得
import { AuthContext } from 'model/AuthModel';

// component取得
import Header from 'components/atoms/Header';
import UserIcon from 'components/atoms/UserIcon';

const BaseHeader = () => {
	const user = useContext(AuthContext);

	return (
		<Header>
			<Link to={'/'}>
				<img src={logoImg} alt="logo" />
			</Link>
			<Link to={'/' + user.dbUser?.user_id}>
				<UserIcon src={user?.dbUser?.user_icon} />
			</Link>
		</Header>
	);
};

export default BaseHeader;
