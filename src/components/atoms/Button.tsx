// ボタン

// css取得
import style from './Button.module.scss';

type Props = {
	onClick: (event: any) => void;
	text: string;
};

const Button = ({ onClick, text }: Props) => {
	return (
		<button className={style.button} onClick={(e) => onClick(e)}>
			{text}
		</button>
	);
};

export default Button;
