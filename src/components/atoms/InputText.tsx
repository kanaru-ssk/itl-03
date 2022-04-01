// テキストinput

// css取得
import style from './InputText.module.scss';

type Props = {
	value: string;
	onInput: (e: any) => void;
	placeholder: string;
};

const InputText = ({ placeholder, value, onInput }: Props) => {
	const onInputText = (e: any) => {
		onInput(e.target.value);
	};
	return <input className={style.input} type="text" value={value} onInput={onInputText} placeholder={placeholder} />;
};

export default InputText;
