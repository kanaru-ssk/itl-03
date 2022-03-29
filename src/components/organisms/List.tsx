// リスト一覧

// css取得
import style from './Posts.module.scss';

// react取得
import { useState, useEffect } from 'react';

// model取得
import { getList } from 'model/ListModel';

// component取得
import Item from 'components/molecules/Item';

type Props = {
	uid: string;
};

const Posts = ({ uid }: Props) => {
	const [list, setList] = useState<item[]>([]);

	useEffect(() => {
		getList(uid).then((result) => {
			setList(result);
		});
	}, [uid]);

	return (
		<ul className={style.container}>
			{list.map((item, key) => {
				return (
					<li key={key}>
						<Item item={item} />
					</li>
				);
			})}
		</ul>
	);
};

export default Posts;
