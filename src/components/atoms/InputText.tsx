// テキストinput

// css取得
import style from './InputText.module.scss';

type Props = {
	placeholder: string;
	onFocus: () => void;
	onChange: (e: any) => void;
};

const InputText = ({ placeholder, onFocus, onChange }: Props) => {
	return (
		<input
			className={style.input}
			type="text"
			placeholder={placeholder}
			onFocus={onFocus}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default InputText;
