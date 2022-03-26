// スライダー

// css取得
import style from './Slider.module.scss';

// React取得
import { useState, useRef, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
};

const Slider = ({ isOpen, setIsOpen, children }: Props) => {
	const { innerHeight: height } = window;
	const [isPermitSlide, setIsPermitSlide] = useState<boolean>(false);
	const [slidePos, setSlidePos] = useState<number>(height - 176);
	const slider = useRef<HTMLDivElement>(null);
	const sliderBar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (slider.current) {
			slider.current.style.transform = 'translateY(' + slidePos + 'px)';
		}
	}, [slidePos]);

	useEffect(() => {
		if (isOpen) {
			setSlidePos(48);
		} else {
			setSlidePos(height - 176);
		}
	}, [isOpen]);

	useEffect(() => {
		sliderBar.current?.addEventListener('mousedown', onSlideStart, { passive: false });
		window.addEventListener('mousemove', onMouseMove, { passive: false });
		window.addEventListener('mouseup', onSlideEnd, { passive: false });

		sliderBar.current?.addEventListener('touchstart', onSlideStart, { passive: false });
		window.addEventListener('touchmove', onTouchMove, { passive: false });
		window.addEventListener('touchend', onSlideEnd, { passive: false });
		return () => {
			sliderBar.current?.removeEventListener('mousedown', onSlideStart);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onSlideEnd);

			sliderBar.current?.removeEventListener('touchstart', onSlideStart);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('touchend', onSlideEnd);
		};
	});

	const onSlideStart = () => {
		setIsPermitSlide(true);
		if (slider.current) {
			slider.current.style.transition = 'none';
		}
	};

	const onTouchMove = (e: any) => {
		e.preventDefault();
		if (isPermitSlide) {
			setSlidePos(e.touches[0].pageY - 16);
		}
	};

	const onMouseMove = (e: any) => {
		e.preventDefault();
		if (isPermitSlide) {
			setSlidePos(e.pageY - 16);
		}
	};

	const onSlideEnd = () => {
		setIsPermitSlide(false);
		if (slider.current) {
			slider.current.style.transition = 'all 0.2s ease';
		}
		if (slidePos < height / 2) {
			if (isOpen) {
				setSlidePos(48);
			} else {
				setIsOpen(true);
			}
		} else {
			if (isOpen) {
				setIsOpen(false);
			} else {
				setSlidePos(height - 176);
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
