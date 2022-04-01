// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';

// model取得
import { getList, getOldestItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import CheckedItem from 'components/molecules/CheckedItem';
import ListMenu from 'components/organisms/ListMenu';

// css取得
import style from './CheckedList.module.scss';

type Props = {
	uid: string;
};

const CheckedList = ({ uid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const [list, setList] = useState<item[]>([]);
	const [oldest, setOldest] = useState<item | null>(null);

	const now = Timestamp.now();
	const hasMore = oldest ? !Boolean(list.find((i) => i.doc_id === oldest.doc_id)) : false;

	useEffect(() => {
		getOldestItem(uid, true).then((result) => {
			setOldest(result);
		});
		getList(uid, true, now).then((results) => {
			setList(results);
		});
	}, [uid]);

	const onContextMenu = (e: any, item: item) => {
		e.preventDefault();
		if (user.authUser?.isAnonymous) return;

		slider(<ListMenu item={item} list={list} setList={setList} />);
	};

	const onMoreLoad = () => {
		const last = list[list.length - 1].at_created;
		getList(uid, true, last).then((results) => {
			setList([...list, ...results]);
		});
	};

	return (
		<div>
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
			{hasMore && <div onClick={onMoreLoad}>more</div>}
		</div>
	);
};

export default CheckedList;
