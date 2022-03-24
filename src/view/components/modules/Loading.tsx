// ロード画面

import './Loading.scss';

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
		<div ref={loadingRef} className="Loading">
			Loading ...
		</div>
	);
};

export default Loading;
