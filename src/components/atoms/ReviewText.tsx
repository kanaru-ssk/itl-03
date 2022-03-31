// レビューテキスト

// react取得
import { useEffect, useState, useRef } from 'react';

// css取得
import style from './ReviewText.module.scss';

type Props = {
	text: string;
};

const ReviewText = ({ text }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (isOpen) {
				ref.current.style.webkitLineClamp = 'unset';
			} else {
				ref.current.style.webkitLineClamp = '2';
			}
		}
	}, [isOpen]);
	return (
		<div className={style.text} ref={ref} onClick={() => setIsOpen(!isOpen)}>
			{text}
		</div>
	);
};

export default ReviewText;
