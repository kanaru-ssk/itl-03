// プロフィール

// component取得
import ProfileIcon from 'components/atoms/ProfileIcon';
import UserName from 'components/atoms/UserName';
import UserCounter from 'components/atoms/UserCounter';
import Button from 'components/atoms/Button';

// css取得
import style from './UserProfile.module.scss';

type Props = {
	user: dbUser;
	isMaypage: boolean;
};

const UserProfile = ({ user, isMaypage }: Props) => {
	const countToString = (num: number | undefined): string => {
		if (num === undefined) {
			return '0';
		} else {
			const str = num.toString();
			return str;
		}
	};

	const checkedPerList = (): string => {
		if (user) {
			const str = user.count_list_checked.toString() + '/' + user.count_list.toString();
			return str;
		} else {
			return '0';
		}
	};
	return (
		<div className={style.container}>
			<div className={style.grid}>
				<div>
					<ProfileIcon src={user?.user_icon} />
				</div>
				{/* <div className={style.flex}>
					<div className={style.counter}>
						<UserCounter num={checkedPerList()} />
						<br />
						達成済み
					</div>
					<div className={style.counter}>
						<UserCounter num={countToString(user?.count_followers)} />
						<br />
						フォロワー
					</div>
					<div className={style.counter}>
						<UserCounter num={countToString(user?.count_follows)} />
						<br />
						フォロー中
					</div>
				</div> */}
			</div>

			<div className={style.name}>
				<UserName name={user?.user_name} />
			</div>
			<div>{user?.user_bio}</div>

			<div className={style.buttons}>
				{isMaypage && <Button onClick={() => {}}>プロフィール編集</Button>}
				{/* {!isMaypage && (
					<div>
						<Button onClick={() => {}}>フォロー</Button>
					</div>
				)} */}
			</div>
		</div>
	);
};

export default UserProfile;
