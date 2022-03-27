// ログインボタン

// css取得
import style from './Button.module.scss';

type Props = {
	onClick: (event: any) => void;
	children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
	return (
		<button className={style.button} onClick={(e) => onClick(e)}>
			{children}
		</button>
	);
};

export default Button;
