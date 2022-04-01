// プロフィール編集ヘッダー

// img取得
import prevImg from 'img/prev.svg';

// css取得
import style from './UserEditHeader.module.scss';

type Props = {
	setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserEditHeader = ({ setIsEditOpen }: Props) => {
	const onSave = () => {};

	return (
		<header className={style.header}>
			<img className={style.prev} onClick={() => setIsEditOpen(false)} src={prevImg} alt="prev" />
			<div>プロフィール編集</div>
			<div className={style.save} onClick={onSave}>
				保存
			</div>
		</header>
	);
};

export default UserEditHeader;
