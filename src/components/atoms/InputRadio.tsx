// ラジオinput (2回クリックで選択解除)

// css取得
import style from './InputRadio.module.scss';

type Props = {
	label: string;
	value: string;
	setValue: (e: any) => void;
	before: placeType;
};

const InputRadio = ({ label, value, setValue, before }: Props) => {
	const onClick = (e: any) => {
		if (e.target.value === before) {
			setValue('');
		} else {
			setValue(e.target.value);
		}
	};
	return (
		<div>
			<input
				className={style.radio}
				type="radio"
				name="place-type"
				value={value}
				checked={value === before}
				id={value}
				onClick={onClick}
				readOnly
			/>
			<label htmlFor={value} className={style.label}>
				{label}
			</label>
		</div>
	);
};

export default InputRadio;
