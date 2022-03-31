// ヘッダー

// react取得
import { Link } from 'react-router-dom';

// img取得
import logoImg from 'img/logo.svg';

// hooks取得
import { useAuth } from 'hooks/Auth';

// component取得
import Header from 'components/atoms/Header';
import UserIcon from 'components/atoms/UserIcon';

// css取得
import style from './BaseHeader.module.scss';

const BaseHeader = () => {
	const user = useAuth();

	const iconLink = () => {
		if (user.dbUser) {
			return '/' + user.dbUser?.user_id;
		} else {
			return '/';
		}
	};

	return (
		<Header>
			<Link to={'/'}>
				<div className={style.logo}>
					<img src={logoImg} alt="logo" />
				</div>
			</Link>

			<Link to={iconLink()}>
				<div className={style.icon}>
					<UserIcon src={user?.dbUser?.user_icon} />
				</div>
			</Link>
		</Header>
	);
};

export default BaseHeader;
