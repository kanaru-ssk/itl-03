// スライダー

// react取得
import React, { createContext, useContext, useCallback, useState, useRef, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

// css取得
import style from './Slider.module.scss';

type sliderContextProps = (contents: React.ReactNode) => void;

const defaultContext: sliderContextProps = () => {};

const SliderContext = createContext<sliderContextProps>(defaultContext);

export const SliderProvider = ({ children }: node) => {
	const [isPermitSlide, setIsPermitSlide] = useState<boolean>(false);
	const [slidePos, setSlidePos] = useState<number>(100);
	const overlayRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const sliderBarRef = useRef<HTMLDivElement>(null);

	const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
	const [sliderContents, setSliderContents] = useState<React.ReactNode>(null);

	const sliderHeight = sliderRef.current ? sliderRef.current.clientHeight : 0;

	const setSlider = useCallback((contents: React.ReactNode): void => {
		if (contents === null) {
			hideSlider();
		} else {
			showSlider();
		}
		setSliderContents(contents);
	}, []);

	const showSlider = () => {
		setIsSliderOpen(true);
		setSlidePos(0);
		if (overlayRef.current) {
			overlayRef.current.style.opacity = '1';
			overlayRef.current.style.pointerEvents = 'unset';
		}
	};

	const hideSlider = () => {
		setSlidePos(100);
		if (overlayRef.current) {
			overlayRef.current.style.opacity = '0';
			overlayRef.current.style.pointerEvents = 'none';
		}
		if (isSliderOpen) {
			setTimeout(() => {
				setIsSliderOpen(false);
			}, 200);
		}
	};

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.style.transform = 'translateY(' + slidePos + '%)';
		}
	}, [slidePos]);

	const clickOnOther = (e: any) => {
		if (e.target === overlayRef.current && !isPermitSlide) {
			hideSlider();
		}
		setIsPermitSlide(false);
	};

	useEffect(() => {
		window.addEventListener('click', clickOnOther, { passive: false });

		sliderBarRef.current?.addEventListener('mousedown', onSlideStart, { passive: false });
		window.addEventListener('mousemove', onMouseMove, { passive: false });
		window.addEventListener('mouseup', onSlideEnd, { passive: false });

		sliderBarRef.current?.addEventListener('touchstart', onSlideStart, { passive: false });
		sliderBarRef.current?.addEventListener('touchmove', onTouchMove, { passive: false });
		sliderBarRef.current?.addEventListener('touchend', onSlideEnd, { passive: false });
		return () => {
			window.removeEventListener('click', clickOnOther);

			sliderBarRef.current?.removeEventListener('mousedown', onSlideStart);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onSlideEnd);

			sliderBarRef.current?.removeEventListener('touchstart', onSlideStart);
			sliderBarRef.current?.removeEventListener('touchmove', onTouchMove);
			sliderBarRef.current?.removeEventListener('touchend', onSlideEnd);
		};
	});

	const onSlideStart = () => {
		setIsPermitSlide(true);
		if (sliderRef.current) {
			sliderRef.current.style.transition = 'none';
		}
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
		if (sliderRef.current) {
			sliderRef.current.style.transition = 'all 0.2s ease';
		}
		if (slidePos < 50) {
			setSlidePos(0);
		} else {
			hideSlider();
		}
	};

	return (
		<SliderContext.Provider value={setSlider}>
			{children}
			<div className={style.overlay} ref={overlayRef}>
				{isSliderOpen && (
					<div className={style.slider} ref={sliderRef}>
						<div ref={sliderBarRef}>
							<SliderBar />
						</div>
						{sliderContents}
					</div>
				)}
			</div>
		</SliderContext.Provider>
	);
};

export const useSlider = () => useContext(SliderContext);
