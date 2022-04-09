// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// model取得
import { getList, getOldestItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import Loading from 'components/atoms/Loading';
import CheckedItem from 'components/molecules/CheckedItem';
import ListMenu from 'components/organisms/ListSlider';

// css取得
import style from './CheckedList.module.scss';

type Props = {
	paramsUid: string | undefined;
};

const CheckedList = ({ paramsUid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const [list, setList] = useState<item[]>([]);
	const [oldest, setOldest] = useState<item | null>(null);

	const now = Timestamp.now();
	const limit = 20;
	const hasMore = oldest ? !Boolean(list.find((i) => i.doc_id === oldest.doc_id)) : false;

	useEffect(() => {
		getOldestItem(paramsUid, true).then((result) => {
			setOldest(result);
		});
		getList(paramsUid, true, now, limit).then((results) => {
			setList(results);
		});
	}, [paramsUid]);

	const onContextMenu = (e: any, item: item) => {
		e.preventDefault();
		if (user.dbUser?.user_uid !== paramsUid) return;

		slider(<ListMenu item={item} list={list} setList={setList} />);
	};

	const onMoreLoad = () => {
		if (list[list.length - 1]) {
			const last = list[list.length - 1].at_created;
			getList(paramsUid, true, last, limit).then((results) => {
				setList([...list, ...results]);
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
			<ul className={style.container}>
				{list.map((item, key) => {
					return (
						<li
							key={key}
							onContextMenu={(e) => {
								onContextMenu(e, item);
							}}
						>
							<CheckedItem item={item} />
						</li>
					);
				})}
			</ul>
		</InfiniteScroll>
	);
};

export default CheckedList;
