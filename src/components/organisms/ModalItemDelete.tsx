// ログアウトModal

// model取得
import { deleteItem } from 'model/ListModel';

// hooks取得
import { useModal } from 'hooks/Modal';

// css取得
import style from './ModalItemDelete.module.scss';

type Props = {
	item: item;
	list: item[];
	setList: React.Dispatch<React.SetStateAction<item[]>>;
};
const ModalItemDelete = ({ item, list, setList }: Props) => {
	const modal = useModal();

	const onDelete = () => {
		modal(null);
		setList(list.filter((value) => value !== item));
		deleteItem(item);
	};

	return (
		<div>
			<div className={style.text}>削除しますか？</div>

			<div className={style.delete} onClick={onDelete}>
				削除
			</div>
			<div className={style.cancel} onClick={() => modal(null)}>
				キャンセル
			</div>
		</div>
	);
};

export default ModalItemDelete;
