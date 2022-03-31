// Sliderアイテム

// css取得
import style from './SliderItem.module.scss';

type Props = {
	text: string;
	onClick?: () => void;
};

const SliderItem = ({ text, onClick }: Props) => {
	return (
		<div className={style.item} onClick={onClick}>
			{text}
		</div>
	);
};

export default SliderItem;
