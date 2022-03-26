// ヘッダー

import style from './Header.module.scss';

import logoImg from 'img/logo.svg';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'model/AuthModel';

import UserIcon from 'components/atoms/UserIcon';

const Header = () => {
	const user = useContext(AuthContext);

	return (
		<header>
			<Link to={'/'}>
				<img className={style.item} src={logoImg} alt="logo" />
			</Link>
			<Link to={'/' + user.dbUser?.user_id}>
				<div className={style.item}>
					<UserIcon src={user?.dbUser?.user_icon} />
				</div>
			</Link>
		</header>
	);
};

export default Header;
