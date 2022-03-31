// 投稿一覧

// component取得
import Post from 'components/organisms/Post';

// css取得
import style from './Posts.module.scss';

type Props = {
	posts: post[];
};

const Posts = ({ posts }: Props) => {
	return (
		<ul className={style.container}>
			{posts.map((post, key) => {
				return (
					<li key={key}>
						<Post post={post} />
					</li>
				);
			})}
		</ul>
	);
};

export default Posts;
