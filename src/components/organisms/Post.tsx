// アイテム一覧

// css取得
import style from './Post.module.scss';

// React取得
import { Link } from 'react-router-dom';

// コンポーネント取得
import UserIcon from 'components/atoms/UserIcon';

type Props = {
	post: post;
};

const Posts = ({ post }: Props) => {
	return (
		<li className={style.item}>
			<UserIcon src={post.user_icon} />
			<Link to={'/explore/' + post.place_id}>{post.place_name}</Link>
		</li>
	);
};

export default Posts;
