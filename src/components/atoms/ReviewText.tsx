// レビューテキスト

// react取得
import { useState } from 'react';

// css取得
import style from './ReviewText.module.scss';

type Props = {
	text: string;
};

const ReviewText = ({ text }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={isOpen ? style.open : style.close} onClick={() => setIsOpen(!isOpen)}>
			{text}
		</div>
	);
};

export default ReviewText;
