// アイテム一覧

// css取得
import style from './Posts.module.scss';

// コンポーネント取得
import Post from 'components/organisms/Post';

type Props = {
	posts: post[];
};

const Posts = ({ posts }: Props) => {
	return (
		<ul className={style.container}>
			{posts.map((post, key) => {
				return <Post key={key} post={post} />;
			})}
		</ul>
	);
};

export default Posts;
