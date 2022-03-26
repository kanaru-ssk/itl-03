// スライダーバー

// css取得
import style from './SliderBar.module.scss';

const SliderBar = () => {
	return (
		<div className={style.grabArea}>
			<div className={style.bar}></div>
		</div>
	);
};

export default SliderBar;
