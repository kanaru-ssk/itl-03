// ボタン

// img取得
import plusImg from 'img/plus.svg';

// css取得
import style from './ButtonAdd.module.scss';

type Props = {
	onClick: (event: any) => void;
};

const ButtonAdd = ({ onClick }: Props) => {
	return (
		<button className={style.button} onClick={(e) => onClick(e)}>
			<img src={plusImg} className={style.plus} />
		</button>
	);
};

export default ButtonAdd;
