// プロフィール編集ヘッダー

// react取得
import { useState, useEffect } from 'react';

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
	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		if (name === dbUser?.user_name && bio === dbUser?.user_bio) {
			// 差分が無ければfalse
			setIsReady(false);
		} else if (name === '' || 30 < name.length) {
			// 名前が空欄か、30文字以上でfalse
			setIsReady(false);
		} else if (200 < bio.length) {
			// 自己紹介が200文字以上でfalse
			setIsReady(false);
		} else {
			setIsReady(true);
		}
	}, [name, bio]);

	const onSave = () => {
		if (isReady) {
			setIsEditOpen(false);
			updateUserData(dbUser, { user_name: name, user_bio: bio });
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
			<div className={style.save} style={isReady ? { color: '#000' } : { color: '#ccc' }} onClick={onSave}>
				保存
			</div>
		</header>
	);
};

export default UserEditHeader;
