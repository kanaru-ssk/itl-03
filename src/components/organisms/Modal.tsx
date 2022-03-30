// スライダー

// css取得
import style from './Modal.module.scss';

// React取得
import React, { createContext, useCallback, useState, useRef, useEffect } from 'react';

// コンポーネント取得
import SliderBar from 'components/atoms/SliderBar';

type modalContextProps = (contents: React.ReactNode) => void;

const defaultContext: modalContextProps = () => {};

export const ModalContext = createContext<modalContextProps>(defaultContext);

export const ModalProvider = ({ children }: node) => {
	const [isPermitSlide, setIsPermitSlide] = useState<boolean>(false);
	const [slidePos, setSlidePos] = useState<number>(100);
	const overlayRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const sliderBarRef = useRef<HTMLDivElement>(null);

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalContents, setModalContents] = useState<React.ReactNode>(null);

	const sliderHeight = sliderRef.current ? sliderRef.current.clientHeight : 0;

	const setModal = useCallback((contents: React.ReactNode): void => {
		setIsModalOpen(true);
		setModalContents(contents);
		setSlidePos(0);

		if (overlayRef.current) {
			overlayRef.current.style.opacity = '1';
			overlayRef.current.style.pointerEvents = 'unset';
		}
	}, []);

	const hideModal = () => {
		setSlidePos(100);
		if (overlayRef.current) {
			overlayRef.current.style.opacity = '0';
			overlayRef.current.style.pointerEvents = 'none';
		}
		if (isModalOpen) {
			setTimeout(() => {
				setIsModalOpen(false);
			}, 200);
		}
	};

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.style.transform = 'translateY(' + slidePos + '%)';
		}
	}, [slidePos]);

	useEffect(() => {
		sliderBarRef.current?.addEventListener('mousedown', onSlideStart, { passive: false });
		window.addEventListener('mousemove', onMouseMove, { passive: false });
		window.addEventListener('mouseup', onSlideEnd, { passive: false });

		sliderBarRef.current?.addEventListener('touchstart', onSlideStart, { passive: false });
		sliderBarRef.current?.addEventListener('touchmove', onTouchMove, { passive: false });
		sliderBarRef.current?.addEventListener('touchend', onSlideEnd, { passive: false });
		return () => {
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
		setIsPermitSlide(false);
		if (sliderRef.current) {
			sliderRef.current.style.transition = 'all 0.2s ease';
		}
		if (slidePos < 50) {
			setSlidePos(0);
		} else {
			hideModal();
		}
	};

	return (
		<ModalContext.Provider value={setModal}>
			{children}
			<div className={style.overlay} ref={overlayRef}>
				{isModalOpen && (
					<div className={style.slider} ref={sliderRef}>
						<div ref={sliderBarRef}>
							<SliderBar />
						</div>
						modal{modalContents}
					</div>
				)}
			</div>
		</ModalContext.Provider>
	);
};
