// ユーザー

// component取得
import UserIcon from 'components/atoms/UserIcon';
import UserName from 'components/atoms/UserName';
import UserId from 'components/atoms/UserId';

// css取得
import style from './User.module.scss';

type Props = {
	userId: string;
	userName: string;
	userIcon: string;
};

const User = ({ userId, userName, userIcon }: Props) => {
	return (
		<div className={style.container}>
			<div className={style.icon}>
				<UserIcon src={userIcon} />
			</div>
			<div className={style.name}>
				<UserName>{userName}</UserName>
			</div>
			<div className={style.id}>
				<UserId>{userId}</UserId>
			</div>
		</div>
	);
};

export default User;
