// ロード画面

import style from './Loading.module.scss';

import logoImg from 'img/logo.svg';

import { useContext, useEffect, useRef } from 'react';

import { AuthContext } from 'model/AuthModel';

const Loading = () => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const loadingRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (authUser && loadingRef.current && logoRef.current) {
			loadingRef.current.style.backgroundColor = 'transparent';
			logoRef.current.style.opacity = '0';
		}
	}, [authUser]);

	return (
		<div ref={loadingRef} className={style.loading}>
			<img ref={logoRef} src={logoImg} className={style.logo} alt="" />
		</div>
	);
};

export default Loading;
