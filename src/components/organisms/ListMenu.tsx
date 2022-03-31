// リストModalメニュー

// css取得
import style from './ListMenu.module.scss';

// react取得
import { useContext } from 'react';

// model取得
import { deleteItem } from 'model/ListModel';

// component取得
import { ModalContext } from 'components/organisms/Modal';
import ModalTitle from 'components/atoms/ModalTitle';
import ModalItem from 'components/atoms/ModalItem';

type Props = {
	item: item;
	list: item[];
	setList: React.Dispatch<React.SetStateAction<item[]>>;
};

const ListMenu = ({ item, list, setList }: Props) => {
	const modal = useContext(ModalContext);

	const onClickDelete = (item: item) => {
		deleteItem(item);
		modal(null);
		setList(list.filter((value) => value !== item));
	};

	return (
		<ul>
			<li>
				<ModalTitle text={item.place_name} />
			</li>
			<li>
				<ModalItem text="達成済みにする" />
			</li>
			<li className={style.delete}>
				<ModalItem text="削除" onClick={() => onClickDelete(item)} />
			</li>
		</ul>
	);
};

export default ListMenu;
