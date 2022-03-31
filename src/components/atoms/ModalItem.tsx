// Modalアイテム

// css取得
import style from './ModalItem.module.scss';

type Props = {
	text: string;
	onClick?: () => void;
};

const ModalItem = ({ text, onClick }: Props) => {
	return (
		<div className={style.item} onClick={onClick}>
			{text}
		</div>
	);
};

export default ModalItem;
