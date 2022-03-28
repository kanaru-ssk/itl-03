// プロフィール

// css取得
import style from './Profile.module.scss';

type Props = {
	user: dbUser;
	isMaypage: boolean;
};

import ProfileIcon from 'components/atoms/ProfileIcon';

const Posts = ({ user, isMaypage }: Props) => {
	return (
		<div>
			<div>
				<ProfileIcon src={user?.user_icon} />
				{/* <img src={user?.user_icon} alt="" /> */}
				<div>{user?.user_name}</div>
				<div>{user?.user_bio}</div>
			</div>
			{isMaypage ? 'マイページ' : 'ユーザーページ'}
		</div>
	);
};

export default Posts;
