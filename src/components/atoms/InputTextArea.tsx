// テキストエリアinput

// css取得
import style from './InputTextArea.module.scss';

type Props = {
	value: string;
	onChange: (e: any) => void;
	placeholder: string;
};

const InputTextArea = ({ placeholder, value, onChange }: Props) => {
	const onChangeText = (e: any) => {
		const height = e.target.scrollHeight;
		e.target.style.height = height + 'px';
		onChange(e.target.value);
	};

	return (
		<textarea
			className={style.input}
			placeholder={placeholder}
			onChange={onChangeText}
			value={value}
			style={{ height: 'auto' }}
		></textarea>
	);
};

export default InputTextArea;
