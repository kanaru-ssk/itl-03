// 追加ボタン

// css取得
import style from './PlaceAddButton.module.scss';

type Props = {
	onClick: (e: any) => void;
};

const PlaceAddButton = ({ onClick }: Props) => {
	return (
		<button className={style.button} onClick={onClick}>
			追加
		</button>
	);
};

export default PlaceAddButton;
