// ランディングページ使い方

// img取得
import mockUserPageImg from 'img/mock-user-01.png';
import mockExplore01Img from 'img/mock-explore-01.png';
import mockExplore02Img from 'img/mock-explore-02.png';
import mockShareImg from 'img/mock-share-01.png';
import mockTwitterImg from 'img/mock-twitter-01.png';

// css取得
import style from './LPHowTo.module.scss';

const LPHowTo = () => {
	return (
		<div className={style.howTo}>
			<h3>行きたいとこリストの使い方</h3>

			<h4>1.行きたい場所をリストに追加</h4>
			<div className={style.howToItem}>
				<img className={style.howMock} src={mockExplore01Img} alt="" />
				<div className={style.howText}>
					検索ページから、
					<br />
					探したいお店のジャンル
					<br />
					又はキーワードで検索
				</div>
			</div>
			<div className={style.howToItem}>
				<img className={style.howMock} src={mockExplore02Img} alt="" />
				<div className={style.howText}>
					追加ボタンを押して
					<br />
					自分の行きたいとこリストに
					<br />
					追加します。
				</div>
			</div>

			<h4>2.リストを更新したらTwitterで共有</h4>
			<div className={style.howToItem}>
				<img className={style.howMock} src={mockShareImg} alt="" />
				<div className={style.howText}>
					リストを更新したら、
					<br />
					マイページのメニューから
					<br />
					Twitterで共有しましょう！
				</div>
			</div>

			<h4>3.友達のリストに”いいね”を送ろう！</h4>
			<div className={style.howToItem}>
				<img className={style.howMock} src={mockUserPageImg} alt="" />
				<div className={style.howText}>
					友達のリストから
					<br />
					気になる場所に
					<br />
					いいねを送ろう！
				</div>
			</div>
			<div className={style.howToItem}>
				<img className={style.howMock} src={mockTwitterImg} alt="" />
				<div className={style.howText}>
					TwitterDMにいいねを
					<br />
					送信できます。
				</div>
			</div>
		</div>
	);
};

export default LPHowTo;
