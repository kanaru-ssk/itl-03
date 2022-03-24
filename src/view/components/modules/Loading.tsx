// ロード画面

import style from './Loading.module.scss';

import logoImg from 'img/logo.svg';

import { useContext, useEffect, useRef } from 'react';

import { AuthContext } from 'model/AuthModel';

const Loading = () => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const loadingRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (authUser && loadingRef.current) {
			loadingRef.current.style.display = 'none';
		}
	}, [authUser]);

	return (
		<div ref={loadingRef} className={style.loading}>
			Loading ...
			<img src={logoImg} className="" alt="" />
		</div>
	);
};

export default Loading;
