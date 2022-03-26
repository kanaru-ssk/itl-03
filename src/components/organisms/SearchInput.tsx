// place Type選択

// css取得
import style from './SearchInput.module.scss';

// React取得
import { useState } from 'react';

// コンポーネント取得
import InputText from 'components/atoms/InputText';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setQueryText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setIsOpen, setQueryText }: Props) => {
	const [inputText, setInputText] = useState<string>('');

	return (
		<div className={style.container}>
			<InputText placeholder="キーワード検索" onFocus={() => setIsOpen(true)} onChange={setInputText} />
			<button className={style.button} onClick={() => setQueryText(inputText)}>
				検索
			</button>
		</div>
	);
};

export default SearchInput;
