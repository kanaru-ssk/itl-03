// スライダー

// css取得
import style from './Slider.module.scss';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

type Props = {
	children: React.ReactNode;
};

const Slider = ({ children }: Props) => {
	return (
		<div className={style.slider}>
			<SliderBar />
			{children}
		</div>
	);
};

export default Slider;
