// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// model取得
import { getFollows, getOldestFollow } from 'model/FollowModel';

// component取得
import User from 'components/molecules/User';
import FollowUser from 'components/molecules/FollowUser';
import Loading from 'components/atoms/Loading';

// css取得
import style from './Follows.module.scss';

type Props = {
	uid: string | undefined;
	type: followType;
};

const Follows = ({ uid, type }: Props) => {
	const [follows, setFollows] = useState<follow[]>([]);
	const [oldest, setOldest] = useState<follow | null>(null);

	const now = Timestamp.now();
	const limit = 20;
	const order = 'at_created';

	useEffect(() => {
		if (uid) {
			getOldestFollow(uid, type, order).then((result) => {
				setOldest(result);
			});
			getFollows(uid, now, limit, type, order).then((results) => {
				setFollows(results);
			});
		}
	}, [uid]);

	const hasMore = oldest ? !Boolean(follows.find((i) => i.user_uid === oldest.user_uid)) : false;

	const onMoreLoad = () => {
		if (follows[follows.length - 1]) {
			const last = follows[follows.length - 1].at_created;
			getFollows(uid, last, limit, type, order).then((results) => {
				setFollows([...follows, ...results]);
			});
		}
	};

	return (
		<InfiniteScroll
			loadMore={onMoreLoad}
			hasMore={hasMore}
			loader={
				<div key={0}>
					<Loading />
				</div>
			}
		>
			<ul>
				{follows.map((follow, key) => {
					return (
						<li className={style.li} key={key}>
							<FollowUser
								userId={follow.user_id}
								userIcon={follow.user_icon}
								userName={follow.user_name}
							/>
						</li>
					);
				})}
			</ul>
		</InfiniteScroll>
	);
};

export default Follows;
