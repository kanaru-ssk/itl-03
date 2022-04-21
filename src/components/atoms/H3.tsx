// h3　padding-left 16px

// css取得
import style from './H3.module.scss';

type Props = {
	text: string | undefined;
};

const H3 = ({ text }: Props) => {
	return <h3 className={style.text}>{text !== undefined && text}</h3>;
};

export default H3;
