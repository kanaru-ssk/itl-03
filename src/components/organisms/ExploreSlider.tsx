// スライダー

// css取得
import style from './ExploreSlider.module.scss';

// React取得
import { useState, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
};

const ExploreSlider = ({ isOpen, setIsOpen, children }: Props) => {
	const { innerHeight: height } = window;
	const top = 48;
	const under = height - 179;
	const [isPermitSlide, setIsPermitSlide] = useState<boolean>(false);
	const [slidePos, setSlidePos] = useState<number>(under);

	useEffect(() => {
		if (isOpen) {
			setSlidePos(top);
		} else {
			setSlidePos(under);
		}
	}, [isOpen]);

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove, { passive: false });
		window.addEventListener('mouseup', onSlideEnd, { passive: false });

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onSlideEnd);
		};
	});

	const onSlideStart = () => {
		setIsPermitSlide(true);
	};

	const onTouchMove = (e: any) => {
		e.preventDefault();
		if (isPermitSlide) {
			const pos = e.touches[0].pageY - 16;
			if (48 <= pos) {
				setSlidePos(pos);
			}
		}
	};

	const onMouseMove = (e: any) => {
		e.preventDefault();
		if (isPermitSlide) {
			const pos = e.pageY - 16;
			if (48 <= pos) {
				setSlidePos(pos);
			}
		}
	};

	const onSlideEnd = () => {
		setIsPermitSlide(false);
		if (slidePos < height / 2) {
			if (isOpen) {
				setSlidePos(top);
			} else {
				setIsOpen(true);
			}
		} else {
			if (isOpen) {
				setIsOpen(false);
			} else {
				setSlidePos(under);
			}
		}
	};

	return (
		<div
			className={style.slider}
			style={
				isPermitSlide
					? { transition: 'none', transform: 'translateY(' + slidePos + 'px)' }
					: { transition: 'all 0.2s ease', transform: 'translateY(' + slidePos + 'px)' }
			}
		>
			<div
				onMouseDown={onSlideStart}
				onTouchStart={onSlideStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onSlideEnd}
			>
				<SliderBar />
			</div>
			<div className={style.children}>{children}</div>
		</div>
	);
};

export default ExploreSlider;
