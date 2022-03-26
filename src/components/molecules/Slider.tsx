// スライダー

// css取得
import style from './Slider.module.scss';

// React取得
import { useState, useRef, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

type Props = {
	children: React.ReactNode;
};

const Slider = ({ children }: Props) => {
	const { innerHeight: height } = window;
	const [slidePos, setSlidePos] = useState<number>(100);
	const slider = useRef<HTMLDivElement>(null);
	const sliderBar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (slider.current) {
			slider.current.style.transform = 'translateY(' + slidePos + 'px)';
		}
	}, [slidePos]);

	useEffect(() => {
		sliderBar.current?.addEventListener('touchstart', onTouchStart, { passive: false });
		sliderBar.current?.addEventListener('touchmove', onTouchMove, { passive: false });
		sliderBar.current?.addEventListener('touchend', onTouchEnd, { passive: false });
		return () => {
			sliderBar.current?.removeEventListener('touchstart', onTouchStart);
			sliderBar.current?.removeEventListener('touchmove', onTouchMove);
			sliderBar.current?.removeEventListener('touchend', onTouchEnd);
		};
	});

	const onTouchStart = () => {
		if (slider.current) {
			slider.current.style.transition = 'none';
		}
	};

	const onTouchMove = (e: any) => {
		e.preventDefault();
		if (slider.current) {
			setSlidePos(e.touches[0].pageY - 16);
		}
	};

	const onTouchEnd = () => {
		if (slider.current) {
			slider.current.style.transition = 'all 0.2s ease';
			if (slidePos < height / 2) {
				setSlidePos(100);
			} else {
				setSlidePos(height - 100);
			}
		}
	};

	return (
		<div className={style.slider} ref={slider}>
			<div ref={sliderBar}>
				<SliderBar />
			</div>

			{children}
		</div>
	);
};

export default Slider;
