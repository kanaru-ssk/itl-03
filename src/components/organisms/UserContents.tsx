// ユーザーページ

// component取得
import List from 'components/organisms/List';
import CheckedList from 'components/organisms/CheckedList';

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

type Props = {
	uid: string;
	tab: tab;
};

const UserContents = ({ uid, tab }: Props) => {
	if (tab === 'list') {
		return <List uid={uid} />;
	} else if (tab === 'checkedList') {
		return <CheckedList uid={uid} />;
	} else {
		return <div>posts</div>;
	}
};

export default UserContents;
