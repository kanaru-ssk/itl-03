// place Type選択

// React取得
import { useState } from 'react';

// コンポーネント取得
import InputSearch from 'components/atoms/InputSearch';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setQueryText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setIsOpen, setQueryText }: Props) => {
	const [inputText, setInputText] = useState<string>('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setQueryText(inputText);
			}}
		>
			<InputSearch placeholder="キーワード検索" onFocus={() => setIsOpen(true)} onChange={setInputText} />
		</form>
	);
};

export default SearchInput;
