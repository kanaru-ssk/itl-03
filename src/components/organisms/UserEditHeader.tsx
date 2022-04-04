// プロフィール編集ヘッダー

// img取得
import prevImg from 'img/prev.svg';

// model取得
import { updateUserData } from 'model/UserModel';

// hooks取得
import { useModal } from 'hooks/Modal';

// component取得
import ModalEditCancel from 'components/organisms/ModalEditCancel';

// css取得
import style from './UserEditHeader.module.scss';

type Props = {
	name: string;
	bio: string;
	dbUser: dbUser;
	setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserEditHeader = ({ name, bio, dbUser, setIsEditOpen }: Props) => {
	const modal = useModal();
	const onSave = () => {
		if (name !== dbUser?.user_name || bio !== dbUser?.user_bio) {
			setIsEditOpen(false);

			updateUserData(dbUser, { user_name: name, user_bio: bio });
		} else {
			setIsEditOpen(false);
		}
	};

	const onClickPrev = () => {
		if (name !== dbUser?.user_name || bio !== dbUser?.user_bio) {
			modal(<ModalEditCancel setIsEditOpen={setIsEditOpen} />);
		} else {
			setIsEditOpen(false);
		}
	};

	return (
		<header className={style.header}>
			<img className={style.prev} onClick={onClickPrev} src={prevImg} alt="prev" />
			<div>プロフィール編集</div>
			<div className={style.save} onClick={onSave}>
				保存
			</div>
		</header>
	);
};

export default UserEditHeader;
