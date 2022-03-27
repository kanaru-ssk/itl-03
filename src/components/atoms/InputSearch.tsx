// サーチinput

// css取得
import style from './InputSearch.module.scss';

type Props = {
	placeholder: string;
	onFocus: () => void;
	onChange: (e: any) => void;
};

const InputSearch = ({ placeholder, onFocus, onChange }: Props) => {
	return (
		<input
			className={style.input}
			type="search"
			placeholder={placeholder}
			onFocus={onFocus}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default InputSearch;
