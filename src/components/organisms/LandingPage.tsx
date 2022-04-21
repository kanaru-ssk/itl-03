// ランディングページ

// component取得
import LPTtop from 'components/molecules/LPTop';
import LPCta from 'components/molecules/LPCta';
import LPStory from 'components/molecules/LPStory';
import LPFucntions from 'components/molecules/LPFunctions';
import LPHowTo from 'components/molecules/LPHowTo';
import LPCopy from 'components/molecules/LPCopy';

// css取得
import style from './LandingPage.module.scss';

const LandingPage = () => {
	return (
		<div className={style.landing}>
			<LPTtop />

			<LPCta />

			<LPStory />

			<LPFucntions />

			<LPHowTo />

			<LPCta />

			<LPCopy />
		</div>
	);
};

export default LandingPage;
