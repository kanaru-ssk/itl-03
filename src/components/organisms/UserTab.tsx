// ユーザータブ

// img取得
import listImg from 'img/list.svg';
import checkedListImg from 'img/checked.svg';

// css取得
import style from './UserTab.module.scss';

type Props = {
	tab: tab;
	setTab: React.Dispatch<React.SetStateAction<tab>>;
};

const UserTab = ({ tab, setTab }: Props) => {
	const onChange = (e: any) => {
		setTab(e.target.value);
	};
	return (
		<nav className={style.tab}>
			<input
				className={style.radio}
				type="radio"
				name="user-tab"
				value="list"
				id="list"
				checked={tab === 'list'}
				onChange={onChange}
			/>
			<label htmlFor="list" className={style.label}>
				<img className={style.labelIcom} src={listImg} alt="list" />
			</label>

			<input
				className={style.radio}
				type="radio"
				name="user-tab"
				value="checkedList"
				id="checkedList"
				checked={tab === 'checkedList'}
				onChange={onChange}
			/>
			<label htmlFor="checkedList" className={style.label}>
				<img className={style.labelIcom} src={checkedListImg} alt="checked-list" />
			</label>

			{/* <input
				className={style.radio}
				type="radio"
				name="user-tab"
				value="posts"
				id="posts"
				checked={tab === 'posts'}
				onChange={onChange}
			/>
			<label htmlFor="posts" className={style.label}>
				posts
			</label> */}
		</nav>
	);
};

export default UserTab;
