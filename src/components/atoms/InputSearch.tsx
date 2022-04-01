// サーチinput

// css取得
import style from './InputSearch.module.scss';

type Props = {
	onFocus: () => void;
	onChange: (e: any) => void;
	placeholder: string;
};

const InputSearch = ({ onFocus, onChange, placeholder }: Props) => {
	return (
		<input
			className={style.input}
			type="search"
			onFocus={onFocus}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
};

export default InputSearch;
