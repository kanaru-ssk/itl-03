// テキストinput

// css取得
// import style from './InputText.module.scss';

type Props = {
	onChange: (e: any) => void;
};

const InputText = ({ onChange }: Props) => {
	return <input type="text" onChange={(e) => onChange(e.target.value)} />;
};

export default InputText;
