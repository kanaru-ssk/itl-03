// ランディングページCTA

// model取得
import { loginWithTwitter } from 'model/AuthModel';

// component取得
import ButtonLogin from 'components/atoms/ButtonLogin';

// css取得
import style from './LPCta.module.scss';

const LPCta = () => {
	return (
		<div className={style.cta}>
			<div className={style.start}>行きたいとこリストを作成しよう！</div>
			<ButtonLogin onClick={loginWithTwitter}>Twitterサインイン</ButtonLogin>
		</div>
	);
};

export default LPCta;
