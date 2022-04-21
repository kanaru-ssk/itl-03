// ヘルプページメイン

// css取得
import style from './HelpMain.module.scss';

type Props = {
	children: React.ReactNode;
};

const HelpMain = ({ children }: Props) => {
	return <div className={style.main}>{children}</div>;
};

export default HelpMain;
