// ランディングページトップ

// img取得
import logoImg from 'img/logo.svg';
import mockUserPageImg from 'img/mock-user-01.png';

// css取得
import style from './LPTop.module.scss';

const LPTop = () => {
	return (
		<div className={style.top}>
			<div className={style.titleWrapper}>
				<img src={logoImg} className={style.logo} alt="logo" />
				<div className={style.title}>行きたいとこリスト</div>
			</div>

			<div className={style.copy}>
				行きたい場所を共有。
				<br />
				友達の行きたいとこリストに
				<br />
				いいねを送って一緒に行こう！
			</div>
			<img className={style.mockUserPage} src={mockUserPageImg} alt="user-page" />
		</div>
	);
};

export default LPTop;
