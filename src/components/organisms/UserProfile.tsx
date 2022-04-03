// プロフィール

// react取得
import { Link } from 'react-router-dom';

// component取得
import ProfileIcon from 'components/atoms/ProfileIcon';
import UserName from 'components/atoms/UserName';
import UserCounter from 'components/atoms/UserCounter';

// css取得
import style from './UserProfile.module.scss';

type Props = {
	paramsUser: dbUser;
};

const UserProfile = ({ paramsUser }: Props) => {
	const countToString = (num: number | undefined): string => {
		if (num === undefined) {
			return '0';
		} else {
			const str = num.toString();
			return str;
		}
	};

	const checkedPerList = (): string => {
		if (paramsUser) {
			const str = paramsUser.count_list_checked.toString() + '/' + paramsUser.count_list.toString();
			return str;
		} else {
			return '0';
		}
	};
	return (
		<div className={style.container}>
			<div className={style.grid}>
				<div>
					<ProfileIcon src={paramsUser?.user_icon} />
				</div>
				<div className={style.flex}>
					<div className={style.counter}>
						<UserCounter num={checkedPerList()} />
						<br />
						達成済み
					</div>
					<div className={style.counter}>
						<Link to={`/${paramsUser?.user_id}/followers`} key={1}>
							<UserCounter num={countToString(paramsUser?.count_followers)} />
							<br />
							フォロワー
						</Link>
					</div>
					<div className={style.counter}>
						<Link to={`/${paramsUser?.user_id}/following`} key={1}>
							<UserCounter num={countToString(paramsUser?.count_following)} />
							<br />
							フォロー中
						</Link>
					</div>
				</div>
			</div>

			<div className={style.name}>
				<UserName name={paramsUser?.user_name} />
			</div>
			<div>{paramsUser?.user_bio}</div>
		</div>
	);
};

export default UserProfile;
