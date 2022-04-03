// フォローユーザー

// react取得
import { Link } from 'react-router-dom';

// component取得
import UserIcon from 'components/atoms/UserIcon';
import UserName from 'components/atoms/UserName';
import UserId from 'components/atoms/UserId';
import Button from 'components/atoms/Button';
// css取得
import style from './FollowUser.module.scss';

type Props = {
	userId: string;
	userName: string;
	userIcon: string;
};

const FollowUser = ({ userId, userName, userIcon }: Props) => {
	return (
		<div className={style.container}>
			<div className={style.icon}>
				<Link to={'/' + userId}>
					<UserIcon src={userIcon} />
				</Link>
			</div>
			<div className={style.name}>
				<UserName name={userName} />
			</div>
			<div className={style.id}>
				<UserId id={userId} />
			</div>
		</div>
	);
};

export default FollowUser;
