// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// model取得
import { getFollows, getOldestFollow } from 'model/FollowModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import User from 'components/molecules/User';

// css取得
import style from './Follows.module.scss';

type Props = {
	uid: string | undefined;
};

const Follows = ({ uid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const [follows, setFollows] = useState<follow[]>([]);
	const [oldest, setOldest] = useState<follow | null>(null);

	const now = Timestamp.now();
	const limit = 20;
	const hasMore = oldest ? !Boolean(follows.find((i) => i.user_uid === oldest.user_uid)) : false;

	useEffect(() => {
		if (uid) {
			getOldestFollow(uid).then((result) => {
				setOldest(result);
			});
			getFollows(uid, now, limit).then((results) => {
				setFollows(results);
			});
		}
	}, [uid]);

	const onContextMenu = (e: any, item: item) => {
		e.preventDefault();
		if (user.authUser?.isAnonymous) return;

		// slider(<ListMenu item={item} list={list} setList={setList} />);
	};

	const onMoreLoad = () => {
		if (follows[follows.length - 1]) {
			const last = follows[follows.length - 1].at_created;
			getFollows(uid, last, limit).then((results) => {
				setFollows([...follows, ...results]);
			});
		}
	};

	return (
		<div>
			<ul>
				{follows.map((follow, key) => {
					return (
						<li
							className={style.li}
							key={key}
							// onContextMenu={(e) => {
							// 	onContextMenu(e, follow);
							// }}
						>
							<User userId={follow.user_id} userIcon={follow.user_icon} userName={follow.user_name} />
							{/* {follow.user_name} */}
							{/* <Item item={follow} /> */}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Follows;
