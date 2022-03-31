// 達成済みにしますかModal

// model取得
import { checkItem } from 'model/ListModel';

// hooks取得
import { useModal } from 'hooks/Modal';

// css取得
import style from './ModalItemCheck.module.scss';

type Props = {
	item: item;
	list: item[];
	setList: React.Dispatch<React.SetStateAction<item[]>>;
};

const ModalItemCheck = ({ item, list, setList }: Props) => {
	const modal = useModal();

	const onCheck = () => {
		modal(null);
		setList(list.filter((value) => value !== item));
		checkItem(item);
	};

	return (
		<div>
			<div className={style.text}>
				達成済みしますか？
				<br />
				達成済みにすると、友達がいいねを送信できなくなります。
			</div>

			<div className={style.check} onClick={onCheck}>
				達成
			</div>
			<div className={style.cancel} onClick={() => modal(null)}>
				キャンセル
			</div>
		</div>
	);
};

export default ModalItemCheck;
