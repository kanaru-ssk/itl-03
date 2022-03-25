// アイテム一覧

// 匿名認証 => ユーザーページ
// 表示userとログインuserが異なる => ユーザーページ
// 表示userとログインuserが同じ => マイページ

type Props = {
	items: item[];
};

const Items = ({ items }: Props) => {
	return (
		<div>
			<h3>items</h3>
			<ul>
				{items.map((value, key) => {
					return (
						<li key={key}>
							{value.item_name}&nbsp;&nbsp;
							{value.item_caption}&nbsp;&nbsp;
							{value.place_types ? value.place_types[0] : ''}&nbsp;&nbsp;
							{value.item_caption}&nbsp;&nbsp;
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Items;
