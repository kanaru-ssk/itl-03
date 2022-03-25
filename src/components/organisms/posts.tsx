// アイテム一覧

// React取得
import { Link } from 'react-router-dom';

type Props = {
	posts: post[];
};

const Posts = ({ posts }: Props) => {
	return (
		<div>
			<h3>posts</h3>
			<ul>
				{posts.map((post, key) => {
					return (
						<li key={key}>
							<Link to={'/explore/' + post.place_id}>{post.place_name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Posts;
