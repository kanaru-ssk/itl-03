// ヘルプページ制作者情報

// css取得
import style from './HelpCreaters.module.scss';

const HelpCreaters = () => {
	return (
		<div className={style.container}>
			<h3>制作者</h3>
			<div className={style.creater}>
				<span className={style.name}>佐々木かなる</span> 企画 設計 UIデザイン 開発 運営
			</div>
			<div className={style.creater}>
				<span className={style.name}>宍戸大祐</span> ロゴデザイン
			</div>
		</div>
	);
};

export default HelpCreaters;
