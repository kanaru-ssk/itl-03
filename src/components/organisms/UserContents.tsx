// ユーザーページ

// component取得
import List from 'components/organisms/List';
import CheckedList from 'components/organisms/CheckedList';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

type Props = {
	paramsUid: string;
	tab: tab;
};

const UserContents = ({ paramsUid, tab }: Props) => {
	if (tab === 'list') {
		return (
			<div>
				<h3>行きたいとこリスト</h3>
				<List paramsUid={paramsUid} />
			</div>
		);
	} else if (tab === 'checkedList') {
		return (
			<div>
				<h3>達成済みリスト</h3>
				<CheckedList paramsUid={paramsUid} />
			</div>
		);
	} else {
		return <div>posts</div>;
	}
};

export default UserContents;
