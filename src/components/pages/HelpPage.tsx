// ヘルプページ

// component取得
import HeplMain from 'components/atoms/HelpMain';
import HelpHeader from 'components/organisms/HelpHeader';
import LPTtop from 'components/molecules/LPTop';
import LPStory from 'components/molecules/LPStory';
import LPFucntions from 'components/molecules/LPFunctions';
import LPHowTo from 'components/molecules/LPHowTo';
import HelpCreaters from 'components/molecules/HelpCreaters';
import LPCopy from 'components/molecules/LPCopy';

const HelpPage = () => {
	return (
		<>
			<HelpHeader />
			<HeplMain>
				<LPTtop />

				<LPStory />

				<LPFucntions />

				<LPHowTo />

				<HelpCreaters />

				<LPCopy />
			</HeplMain>
		</>
	);
};

export default HelpPage;
