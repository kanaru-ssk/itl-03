// スライダー

// react取得
import { createContext, useContext, useCallback, useState, useRef, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

// css取得
import style from './Slider.module.scss';

type sliderContextProps = (contents: React.ReactNode, _isFull?: boolean) => void;

const defaultContext: sliderContextProps = () => {};

const SliderContext = createContext<sliderContextProps>(defaultContext);

export const SliderProvider = ({ children }: node) => {
	const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
	const [isPermitSlide, setIsPermitSlide] = useState<boolean>(false);
	const [slidePos, setSlidePos] = useState<number>(100);
	const sliderRef = useRef<HTMLDivElement>(null);
	const [isFull, setIsFull] = useState<boolean>(false);

	const [sliderContents, setSliderContents] = useState<React.ReactNode>(null);

	const sliderHeight = sliderRef.current ? sliderRef.current.clientHeight : 0;

	const setSlider = useCallback((contents: React.ReactNode, _isFull?: boolean): void => {
		if (contents === null) {
			setIsSliderOpen(false);
			setIsFull(false);
		} else {
			if (_isFull) {
				setIsFull(true);
			} else {
				setIsFull(false);
			}
			setIsSliderOpen(true);
			setSliderContents(contents);
		}
	}, []);

	useEffect(() => {
		if (isSliderOpen) {
			setSlidePos(0);
		} else {
			setSlidePos(100);
		}
	}, [isSliderOpen]);

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.style.transform = 'translateY(' + slidePos + '%)';
		}
	}, [slidePos]);

	const clickOnOther = (e: any) => {
		if (e.target.id === 'slider-overlay') {
			setIsSliderOpen(false);
		}

		setIsPermitSlide(false);
	};

	useEffect(() => {
		window.addEventListener('click', clickOnOther, { passive: false });

		window.addEventListener('mousemove', onMouseMove, { passive: false });
		window.addEventListener('mouseup', onSlideEnd, { passive: false });

		return () => {
			window.removeEventListener('click', clickOnOther);

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
			const pos = (100 * (e.touches[0].pageY - 16 - window.innerHeight + sliderHeight)) / sliderHeight;
			if (0 <= pos && pos <= 100) {
				setSlidePos(pos);
			}
		}
	};

	const onMouseMove = (e: any) => {
		e.preventDefault();
		if (isPermitSlide) {
			const pos = (100 * (e.pageY - 16 - window.innerHeight + sliderHeight)) / sliderHeight;
			if (0 <= pos && pos <= 100) {
				setSlidePos(pos);
			}
		}
	};

	const onSlideEnd = () => {
		if (isPermitSlide) {
			setIsPermitSlide(false);

			if (slidePos < 50) {
				setSlidePos(0);
			} else {
				setIsSliderOpen(false);
			}
		}
	};

	return (
		<SliderContext.Provider value={setSlider}>
			{children}
			<div
				className={style.overlay}
				id="slider-overlay"
				style={isSliderOpen ? { opacity: 1, pointerEvents: 'unset' } : { opacity: 0, pointerEvents: 'none' }}
			>
				<div
					className={isFull ? style.full : style.slider}
					ref={sliderRef}
					style={
						isPermitSlide
							? { transition: 'none', transform: 'translateY(' + slidePos + '%)' }
							: {
									transition: 'all 0.2s ease',
									transform: 'translateY(' + slidePos + '%)',
							  }
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
					{sliderContents}
				</div>
			</div>
		</SliderContext.Provider>
	);
};

export const useSlider = () => useContext(SliderContext);
