// ランディングページ機能

// img取得
import functionsImg from 'img/lp-funcrtions.png';
import checkedListImg from 'img/checked.svg';

// css取得
import style from './LPFunctions.module.scss';

const LPFunctions = () => {
	return (
		<div className={style.functions}>
			<h3>行きたいとこリストでできること</h3>

			<img className={style.functionsImg} src={functionsImg} alt="functions" />

			<div className={style.function}>
				<img src={checkedListImg} alt="check" />
				<div>気になる人をカジュアルに誘える</div>
			</div>
			<div className={style.function}>
				<img src={checkedListImg} alt="check" />
				<div>友達と出かける所に困らない</div>
			</div>
			<div className={style.function}>
				<img src={checkedListImg} alt="check" />
				<div>みんながよく行くお店を知れる</div>
			</div>
		</div>
	);
};

export default LPFunctions;
