// 追加ボタン

// css取得
import style from './InputRadio.module.scss';

type Props = {
	name: string;
	onChange: (e: any) => void;
};

const PlaceAddButton = ({ name, onChange }: Props) => {
	return (
		<div>
			<input className={style.radio} type="radio" name={name} id={name} onChange={onChange} />
			<label htmlFor={name} className={style.label}>
				追加
			</label>
		</div>
	);
};

export default PlaceAddButton;
