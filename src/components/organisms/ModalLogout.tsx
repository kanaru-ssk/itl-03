// ログアウトModal

// model取得
import { logout } from 'model/AuthModel';

// hooks取得
import { useModal } from 'hooks/Modal';

// css取得
import style from './ModalLogout.module.scss';

const ModalLogout = () => {
	const modal = useModal();
	return (
		<div>
			<div className={style.text}>ログアウトしますか？</div>

			<div className={style.logout} onClick={logout}>
				ログアウト
			</div>
			<div className={style.cancel} onClick={() => modal(null)}>
				キャンセル
			</div>
		</div>
	);
};

export default ModalLogout;
