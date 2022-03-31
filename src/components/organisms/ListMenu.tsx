// リストSliderメニュー

// model取得
import { deleteItem } from 'model/ListModel';

// hooks取得
import { useSlider } from 'hooks/Slider';

// component取得
import SliderTitle from 'components/atoms/SliderTitle';
import SliderItem from 'components/atoms/SliderItem';

// css取得
import style from './ListMenu.module.scss';

type Props = {
	item: item;
	list: item[];
	setList: React.Dispatch<React.SetStateAction<item[]>>;
};

const ListMenu = ({ item, list, setList }: Props) => {
	const slider = useSlider();

	const onClickDelete = (item: item) => {
		deleteItem(item);
		slider(null);
		setList(list.filter((value) => value !== item));
	};

	return (
		<ul>
			<li>
				<SliderTitle text={item.place_name} />
			</li>
			<li>
				<SliderItem text="達成済みにする" />
			</li>
			<li className={style.delete}>
				<SliderItem text="削除" onClick={() => onClickDelete(item)} />
			</li>
		</ul>
	);
};

export default ListMenu;
