// 投稿一覧

// component取得
import ModalItem from 'components/atoms/ModalItem';

// model取得
import { logout } from 'model/AuthModel';

type Props = {
	paramsUserUid: string | undefined;
};

const UserHeaderMenu = ({ paramsUserUid }: Props) => {
	const shareOnTwitter = () => {
		const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + paramsUserUid;
		const hashtag = '行きたいとこリスト';
		const text = '行きたいとこリストを更新しました!';
		const URL = 'http://twitter.com/share?url=' + linkUrl + '&text=' + text + '%0A%20%23' + hashtag + '%20';
		location.href = URL;
	};

	const copyLink = () => {
		const linkUrl = 'https://' + process.env.REACT_APP_FB_DOMAIN_WEBAPP + '/' + paramsUserUid;
		navigator.clipboard.writeText(linkUrl);
	};

	return (
		<ul>
			<li>
				<ModalItem text="Twitterで共有" onClick={shareOnTwitter} />
			</li>
			<li>
				<ModalItem text="URLをコピー" onClick={copyLink} />
			</li>
			<li>
				<ModalItem text="ログアウト" onClick={logout} />
			</li>
		</ul>
	);
};

export default UserHeaderMenu;
