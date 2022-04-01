// リスト一覧

// firebase取得
import { Timestamp } from 'firebase/firestore';

// react取得
import { useState, useEffect } from 'react';

// img取得
import loadingImg from 'img/loading.svg';

// model取得
import { getList, getOldestItem } from 'model/ListModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import Item from 'components/molecules/Item';
import ListMenu from 'components/organisms/ListMenu';

// css取得
import style from './List.module.scss';

type Props = {
	uid: string;
};

const List = ({ uid }: Props) => {
	const user = useAuth();
	const slider = useSlider();
	const [list, setList] = useState<item[]>([]);
	const [oldest, setOldest] = useState<item | null>(null);

	const now = Timestamp.now();
	const hasMore = oldest ? !Boolean(list.find((i) => i.doc_id === oldest.doc_id)) : false;

	useEffect(() => {
		getOldestItem(uid, false).then((results) => {
			setOldest(results);
		});
		getList(uid, false, now).then((results) => {
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
		getList(uid, false, last).then((results) => {
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
							<Item item={item} />
						</li>
					);
				})}
			</ul>
			{hasMore && (
				<div onClick={onMoreLoad}>
					<img src={loadingImg} alt="loading" />
				</div>
			)}
		</div>
	);
};

export default List;
