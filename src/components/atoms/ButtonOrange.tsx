// ボタン (オレンジ)

// css取得
import style from './ButtonOrange.module.scss';

type Props = {
	onClick: (event: any) => void;
	children: React.ReactNode;
};

const ButtonOrange = ({ onClick, children }: Props) => {
	return (
		<button className={style.button} onClick={(e) => onClick(e)}>
			{children}
		</button>
	);
};

export default ButtonOrange;
