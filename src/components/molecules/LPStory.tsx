// ランディングページストーリー

// css取得
import style from './LPStory.module.scss';

const LPStory = () => {
	return (
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
	);
};

export default LPStory;
