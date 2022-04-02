// ボタン

// img取得
import loadingImg from 'img/loading.svg';

// css取得
import style from './ButtonLoading.module.scss';

const ButtonLoading = () => {
	return (
		<button className={style.button}>
			<img src={loadingImg} width="16px" alt="loading" />
		</button>
	);
};

export default ButtonLoading;
