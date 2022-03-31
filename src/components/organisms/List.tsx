// リスト一覧

// react取得
import { useState, useEffect } from 'react';

// model取得
import { getList } from 'model/ListModel';

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

	const onContextMenu = (e: any, item: item) => {
		e.preventDefault();
		if (user.authUser?.isAnonymous) return;

		slider(<ListMenu item={item} list={list} setList={setList} />);
	};

	useEffect(() => {
		getList(uid, false).then((result) => {
			setList(result);
		});
	}, [uid]);

	return (
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
	);
};

export default List;
