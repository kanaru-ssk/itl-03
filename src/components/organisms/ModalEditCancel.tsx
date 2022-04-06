// 変更を破棄しますかModal

// hooks取得
import { useModal } from 'hooks/Modal';

// css取得
import style from './ModalItemCheck.module.scss';

type Props = {
	setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalEditCancel = ({ setIsEditOpen }: Props) => {
	const modal = useModal();

	const onDestruction = () => {
		modal(null);
		setIsEditOpen(false);
	};

	return (
		<div>
			<div className={style.text}>
				保存を完了していません。
				<br />
				変更を破棄しますか？
			</div>

			<div className={style.check} onClick={onDestruction}>
				破棄
			</div>
			<div className={style.cancel} onClick={() => modal(null)}>
				キャンセル
			</div>
		</div>
	);
};

export default ModalEditCancel;
