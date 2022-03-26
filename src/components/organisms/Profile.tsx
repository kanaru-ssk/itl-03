// プロフィール

// css取得
import style from './Profile.module.scss';

type Props = {
	user: dbUser;
	isMaypage: boolean;
};

const Posts = ({ user, isMaypage }: Props) => {
	return (
		<div>
			<div>
				<img src={user?.user_icon} alt="" />
				<div>{user?.user_name}</div>
				<div>{user?.user_bio}</div>
				<div>{user?.user_twitter_disp_id}</div>
			</div>
			{isMaypage ? 'マイページ' : 'ユーザーページ'}
		</div>
	);
};

export default Posts;
