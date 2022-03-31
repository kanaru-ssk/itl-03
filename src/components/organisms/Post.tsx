// アイテム一覧

// react取得
import { Link } from 'react-router-dom';

// component取得
import User from 'components/molecules/User';

// css取得
import style from './Post.module.scss';

type Props = {
	post: post;
};

const Posts = ({ post }: Props) => {
	return (
		<div className={style.item}>
			<User userId={post.user_id} userName={post.user_name} userIcon={post.user_icon} />
			<Link to={'/explore/' + post.place_id}>{post.place_name}</Link>
		</div>
	);
};

export default Posts;
