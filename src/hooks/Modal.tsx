// スライダー

// react取得
import { createContext, useContext, useCallback, useState, useEffect } from 'react';

// css取得
import style from './Modal.module.scss';

type modalContextProps = (contents: React.ReactNode) => void;

const defaultContext: modalContextProps = () => {};

const ModalContext = createContext<modalContextProps>(defaultContext);

export const ModalProvider = ({ children }: node) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const [modalContents, setModalContents] = useState<React.ReactNode>(null);

	const setModal = useCallback((contents: React.ReactNode): void => {
		if (contents === null) {
			setIsModalOpen(false);
		} else {
			setIsModalOpen(true);
		}
		setModalContents(contents);
	}, []);

	const clickOnOther = (e: any) => {
		if (e.target.id === 'overlay') {
			setIsModalOpen(false);
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
			<div
				className={style.overlay}
				id="overlay"
				style={isModalOpen ? { opacity: 1, pointerEvents: 'unset' } : { opacity: 0, pointerEvents: 'none' }}
			>
				<div className={style.modal}>{modalContents}</div>
			</div>
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
