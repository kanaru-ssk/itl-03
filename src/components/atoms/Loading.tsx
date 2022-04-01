// ローディング画像

// img取得
import loadingImg from 'img/loading.svg';

// css取得
import style from './Loading.module.scss';

const Loading = () => {
	return (
		<div className={style.load}>
			<img src={loadingImg} alt="loading" />
		</div>
	);
};

export default Loading;
