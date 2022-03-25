// アイテム一覧

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

type Props = {
	posts: post[];
};

const Posts = ({ posts }: Props) => {
	return (
		<div>
			<h3>posts</h3>
			<ul>
				{posts.map((value, key) => {
					return <li key={key}>{value.place_name}&nbsp;&nbsp;</li>;
				})}
			</ul>
		</div>
	);
};

export default Posts;
