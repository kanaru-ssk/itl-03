// ロード画面

// react取得
import { useEffect, useRef } from 'react';

// img取得
import logoImg from 'img/logo.svg';

// hooks取得
import { useAuth } from 'hooks/Auth';

// css取得
import style from './Loading.module.scss';

const Loading = () => {
	const user = useAuth();
	const authUser = user.authUser;
	const loadingRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (authUser && loadingRef.current) {
			loadingRef.current.style.opacity = '0';
		}
	}, [authUser]);

	return (
		<div ref={loadingRef} className={style.loading}>
			<img src={logoImg} className={style.logo} alt="logo" />
		</div>
	);
};

export default Loading;
