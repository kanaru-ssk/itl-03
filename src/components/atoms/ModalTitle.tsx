// Modalアイテム

// css取得
import style from './ModalTitle.module.scss';

type Props = {
	text: string;
};

const ModalTitle = ({ text }: Props) => {
	return <div className={style.title}>{text}</div>;
};

export default ModalTitle;
