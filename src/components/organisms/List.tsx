// リスト一覧

// css取得
import style from './Posts.module.scss';

// react取得
import { useContext, useState, useEffect } from 'react';

// model取得
import { AuthContext } from 'model/AuthModel';
import { getList, deleteItem } from 'model/ListModel';

// component取得
import Item from 'components/molecules/Item';
import { ModalContext } from 'components/organisms/Modal';
import ListMenu from 'components/organisms/ListMenu';

type Props = {
	uid: string;
};

const Posts = ({ uid }: Props) => {
	const user = useContext(AuthContext);
	const modal = useContext(ModalContext);
	const [list, setList] = useState<item[]>([]);

	const onContextMenu = (e: any, item: item) => {
		e.preventDefault();
		if (user.authUser?.isAnonymous) return;

		modal(<ListMenu item={item} list={list} setList={setList} />);
	};

	useEffect(() => {
		getList(uid).then((result) => {
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

export default Posts;
