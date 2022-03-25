// メイン

import style from './Main.module.scss';

type Props = {
	isHeaderShow: boolean;
	children: React.ReactNode;
};

const Main = ({ isHeaderShow, children }: Props) => {
	return <main className={isHeaderShow ? style.isHeaderShow : style.none}>{children}</main>;
};

export default Main;
