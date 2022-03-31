// スライダー

// react取得
import React, { createContext, useContext, useCallback, useState, useRef, useEffect } from 'react';

// css取得
import style from './Modal.module.scss';

type modalContextProps = (contents: React.ReactNode) => void;

const defaultContext: modalContextProps = () => {};

const ModalContext = createContext<modalContextProps>(defaultContext);

export const ModalProvider = ({ children }: node) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalContents, setModalContents] = useState<React.ReactNode>(null);

	const setModal = useCallback((contents: React.ReactNode): void => {
		if (contents === null) {
			hideModal();
		} else {
			showModal();
		}
		setModalContents(contents);
	}, []);

	const showModal = () => {
		setIsModalOpen(true);
		if (overlayRef.current) {
			overlayRef.current.style.opacity = '1';
			overlayRef.current.style.pointerEvents = 'unset';
		}
	};

	const hideModal = () => {
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

	const clickOnOther = (e: any) => {
		if (e.target === overlayRef.current) {
			hideModal();
		}
	};

	useEffect(() => {
		window.addEventListener('click', clickOnOther, { passive: false });
		return () => {
			window.removeEventListener('click', clickOnOther);
		};
	});

	return (
		<ModalContext.Provider value={setModal}>
			{children}
			<div className={style.overlay} ref={overlayRef}>
				{isModalOpen && (
					<div className={style.modal} ref={modalRef}>
						{modalContents}
					</div>
				)}
			</div>
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
