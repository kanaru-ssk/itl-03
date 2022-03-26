// ラジオinput (2回クリックで選択解除)

// css取得
import style from './InputRadio.module.scss';

// React取得
import { useRef } from 'react';

type Props = {
	label: string;
	value: string;
	setValue: (e: any) => void;
	before: placeType;
};

const InputRadio = ({ label, value, setValue, before }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	const onClick = (e: any) => {
		if (e.target.value === before && ref.current) {
			ref.current.checked = false;
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
				id={value}
				onClick={onClick}
				ref={ref}
			/>
			<label htmlFor={value} className={style.label}>
				{label}
			</label>
		</div>
	);
};

export default InputRadio;
