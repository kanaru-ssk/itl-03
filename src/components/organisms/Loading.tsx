// ロード画面

// css取得
import style from './Loading.module.scss';

// img取得
import logoImg from 'img/logo.svg';

// react取得
import { useContext, useEffect, useRef } from 'react';

// model取得
import { AuthContext } from 'model/AuthModel';

const Loading = () => {
	const user = useContext(AuthContext);
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
