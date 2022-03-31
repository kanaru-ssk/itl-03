// リストSliderメニュー

// hooks取得
import { useSlider } from 'hooks/Slider';
import { useModal } from 'hooks/Modal';

// component取得
import SliderTitle from 'components/atoms/SliderTitle';
import SliderItem from 'components/atoms/SliderItem';
import ModalItemCheck from './ModalItemCheck';
import ModalItemDelete from './ModalItemDelete';

// css取得
import style from './ListMenu.module.scss';

type Props = {
	item: item;
	list: item[];
	setList: React.Dispatch<React.SetStateAction<item[]>>;
};

const ListMenu = ({ item, list, setList }: Props) => {
	const slider = useSlider();
	const modal = useModal();

	const onClickCheck = () => {
		slider(null);
		modal(<ModalItemCheck item={item} list={list} setList={setList} />);
	};

	const onClickDelete = () => {
		slider(null);
		modal(<ModalItemDelete item={item} list={list} setList={setList} />);
	};

	return (
		<ul>
			<li>
				<SliderTitle text={item.place_name} />
			</li>
			<li>
				<SliderItem text="達成済みにする" onClick={onClickCheck} />
			</li>
			<li className={style.delete}>
				<SliderItem text="削除" onClick={onClickDelete} />
			</li>
		</ul>
	);
};

export default ListMenu;
