// ログインボタン

// css取得
import style from './ButtonLogin.module.scss';

type Props = {
	onClick: (event: any) => void;
	children: React.ReactNode;
};

const ButtonLogin = ({ onClick, children }: Props) => {
	return (
		<button className={style.button} onClick={(e) => onClick(e)}>
			{children}
		</button>
	);
};

export default ButtonLogin;
