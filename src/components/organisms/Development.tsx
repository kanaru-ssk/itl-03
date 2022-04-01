// DMページ

// css取得
import style from './Development.module.scss';

type Props = {
	title: string;
};

const Development = ({ title }: Props) => {
	return (
		<div className={style.container}>
			<h1>{title}</h1>
			<p>機能開発中です。</p>
		</div>
	);
};

export default Development;
