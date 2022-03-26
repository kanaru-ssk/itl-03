// ヘッダー

// css取得
import style from './Header.module.scss';

type Props = {
	children: React.ReactNode;
};

const Header = ({ children }: Props) => {
	return <header className={style.header}>{children}</header>;
};

export default Header;
