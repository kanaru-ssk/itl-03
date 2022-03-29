// 追加ボタン

// css取得
import style from './InputRadio.module.scss';

type Props = {
	value: string;
	onChange: (e: any) => void;
};

const PlaceAddButton = ({ value, onChange }: Props) => {
	return (
		<div>
			<input
				className={style.radio}
				type="radio"
				name="place-type"
				value={value}
				id={value}
				onChange={onChange}
			/>
			<label htmlFor={value} className={style.label}>
				追加
			</label>
		</div>
	);
};

export default PlaceAddButton;
