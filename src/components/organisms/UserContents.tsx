// ユーザーページ

// component取得
import List from 'components/organisms/List';
import CheckedList from 'components/organisms/CheckedList';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

type Props = {
	paramsUser: dbUser;
	tab: tab;
};

const UserContents = ({ paramsUser, tab }: Props) => {
	if (tab === 'list') {
		return (
			<div>
				<h3>{paramsUser?.list_title}</h3>
				<List paramsUid={paramsUser?.user_uid} />
			</div>
		);
	} else if (tab === 'checkedList') {
		return (
			<div>
				<h3>達成済みリスト</h3>
				<CheckedList paramsUid={paramsUser?.user_uid} />
			</div>
		);
	} else {
		return <div>posts</div>;
	}
};

export default UserContents;
