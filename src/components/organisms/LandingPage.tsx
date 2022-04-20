// ログインページ

// img取得
import logoImg from 'img/logo.svg';
import mockUserPageImg from 'img/mock-user-01.png';
import functionsImg from 'img/lp-funcrtions.png';
import checkedListImg from 'img/checked.svg';
import mockExplore01Img from 'img/mock-explore-01.png';
import mockExplore02Img from 'img/mock-explore-02.png';
import mockShareImg from 'img/mock-share-01.png';
import mockTwitterImg from 'img/mock-twitter-01.png';

// model取得
import { loginWithTwitter } from 'model/AuthModel';

// component取得
import ButtonLogin from 'components/atoms/ButtonLogin';

// css取得
import style from './LandingPage.module.scss';

const LandingPage = () => {
	return (
		<div className={style.login}>
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

			<div className={style.cta}>
				<div className={style.start}>行きたいとこリストを作成しよう！</div>
				<ButtonLogin onClick={loginWithTwitter}>Twitterサインイン</ButtonLogin>
			</div>

			<div className={style.story}>
				<p>
					近年の新型コロナウイルスの流行により、 <br />
					組織的な対面の活動が制限され、
					<br />
					交友を広げる機会が減ってしまいました。 <br />
					<br />
					そこで、個人同士が気軽に遊びに誘えるような
					<br />
					環境を作りたいという思いから、
					<br />
					「行きたいとこリスト」が生まれました。
					<br />
					<br />
					行きたいとこリストを共有することで、 <br />
					カジュアルに遊びに誘うことが出来ます。
				</p>
			</div>

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

			<div className={style.cta}>
				<div className={style.start}>行きたいとこリストを作成しよう！</div>
				<ButtonLogin onClick={loginWithTwitter}>Twitterサインイン</ButtonLogin>
			</div>

			<div className={style.copyRight}>&copy;2022 Kanaru</div>
		</div>
	);
};

export default LandingPage;
