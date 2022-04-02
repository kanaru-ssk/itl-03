// 投稿一覧

// model取得
import { generateShareLink } from 'model/UserModel';

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

const UserHeaderSlider = ({ paramsUserUid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const modal = useModal();

	const shareOnTwitter = async () => {
		const URL = await generateShareLink(user.dbUser?.user_uid, paramsUserUid);

		if (URL) location.href = URL;
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

export default UserHeaderSlider;
