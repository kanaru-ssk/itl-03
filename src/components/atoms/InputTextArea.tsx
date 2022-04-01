// テキストエリアinput

// react取得
import { useEffect, useRef } from 'react';

// css取得
import style from './InputText.module.scss';

type Props = {
	value: string;
	onInput: (e: any) => void;
	placeholder: string;
};

const InputTextArea = ({ placeholder, value, onInput }: Props) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	useEffect(() => {
		if (textareaRef.current) {
			if (textareaRef.current.offsetHeight < textareaRef.current.scrollHeight) {
				textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
			}
		}
	}, [value]);

	const onInputText = (e: any) => {
		onInput(e.target.value);
		if (textareaRef.current) {
			if (textareaRef.current.offsetHeight < textareaRef.current.scrollHeight) {
				textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
			}
		}
	};

	return (
		<textarea
			className={style.input}
			placeholder={placeholder}
			onInput={onInputText}
			value={value}
			ref={textareaRef}
		></textarea>
	);
};

export default InputTextArea;
