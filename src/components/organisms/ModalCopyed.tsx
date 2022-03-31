// ログアウトModal

// react取得
import { useEffect } from 'react';

// hooks取得
import { useModal } from 'hooks/Modal';

// css取得
import style from './ModalCopyed.module.scss';

const ModalCopyed = () => {
	const modal = useModal();

	useEffect(() => {
		setTimeout(() => {
			modal(null);
		}, 1500);
	}, []);
	return <div className={style.wrapper}>リンクをコピーしました。</div>;
};

export default ModalCopyed;
