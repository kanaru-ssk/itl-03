// ロード画面

import style from './Header.module.scss';

import logoImg from 'img/logo.svg';
import userImg from 'img/user.svg';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'model/AuthModel';

const Header = () => {
	const user = useContext(AuthContext);

	return (
		<header>
			<Link to={'/'}>
				<img className={style.item} src={logoImg} alt="logo" />
			</Link>
			<Link to={'/' + user.dbUser?.user_id}>
				<img
					className={`${style.item} ${style.icon}`}
					src={user.dbUser ? user.dbUser.user_icon : userImg}
					alt="user-icon"
				/>
			</Link>
		</header>
	);
};

export default Header;
