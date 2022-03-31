// Sliderアイテム

// css取得
import style from './SliderTitle.module.scss';

type Props = {
	text: string;
};

const SliderTitle = ({ text }: Props) => {
	return <div className={style.title}>{text}</div>;
};

export default SliderTitle;
