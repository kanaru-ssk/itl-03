// 投稿一覧

// model取得
import { logout } from 'model/AuthModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';
import { useModal } from 'hooks/Modal';

// component取得
import SliderItem from 'components/atoms/SliderItem';
import ModalLoguout from 'components/organisms/ModalLogout';
import ModalCopyed from 'components/organisms/ModalCopyed';

type Props = {
	paramsUserUid: string | undefined;
};

const UserHeaderMenu = ({ paramsUserUid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const modal = useModal();

	const shareOnTwitter = () => {
		slider(null);
		const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + paramsUserUid;
		const hashtag = '行きたいとこリスト';
		const text = '行きたいとこリストを更新しました!';
		const URL = 'http://twitter.com/share?url=' + linkUrl + '&text=' + text + '%0A%20%23' + hashtag + '%20';
		location.href = URL;
	};

	const copyLink = () => {
		slider(null);
		modal(<ModalCopyed />);
		const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + paramsUserUid;
		navigator.clipboard.writeText(linkUrl);
	};

	const onClickLogout = () => {
		slider(null);
		modal(<ModalLoguout />);
	};

	return (
		<ul>
			{user.dbUser?.user_id === paramsUserUid && (
				<li>
					<SliderItem text="Twitterで共有" onClick={shareOnTwitter} />
				</li>
			)}

			<li>
				<SliderItem text="URLをコピー" onClick={copyLink} />
			</li>

			{user.dbUser?.user_id === paramsUserUid && (
				<li>
					<SliderItem text="ログアウト" onClick={onClickLogout} />
				</li>
			)}
		</ul>
	);
};

export default UserHeaderMenu;
