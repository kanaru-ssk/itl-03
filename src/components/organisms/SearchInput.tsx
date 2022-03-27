// place Type選択

// css取得
import style from './SearchInput.module.scss';

// React取得
import { useState } from 'react';

// コンポーネント取得
import InputText from 'components/atoms/InputText';
import Button from 'components/atoms/Button';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setQueryText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setIsOpen, setQueryText }: Props) => {
	const [inputText, setInputText] = useState<string>('');

	return (
		<div className={style.container}>
			<InputText placeholder="キーワード検索" onFocus={() => setIsOpen(true)} onChange={setInputText} />
			<div className={style.button}>
				<Button onClick={() => setQueryText(inputText)}>検索</Button>
			</div>
		</div>
	);
};

export default SearchInput;
