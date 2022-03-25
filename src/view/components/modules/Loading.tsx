// ロード画面

import style from './Loading.module.scss';

import logoImg from 'img/logo.svg';

import { useContext, useEffect, useRef } from 'react';

import { AuthContext } from 'model/AuthModel';

type Props = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loading = ({ setIsLoading }: Props) => {
	const user = useContext(AuthContext);
	const authUser = user.authUser;
	const loadingRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (authUser && loadingRef.current) {
			loadingRef.current.style.opacity = '0';
			setTimeout(() => {
				setIsLoading(false);
			}, 600);
		}
	}, [authUser]);

	return (
		<div ref={loadingRef} className={style.loading}>
			<img src={logoImg} className={style.logo} alt="" />
		</div>
	);
};

export default Loading;
