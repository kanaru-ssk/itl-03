// プロフィール編集ページ

// react取得
import { useState, useRef, useEffect } from 'react';

// component取得
import InputText from 'components/atoms/InputText';
import InputTextArea from 'components/atoms/InputTextArea';
import UserEditHeader from 'components/organisms/UserEditHeader';

// css取得
import style from './UserEdit.module.scss';

type Proos = {
	dbUser: dbUser;
	isEditOpen: boolean;
	setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserEdit = ({ dbUser, isEditOpen, setIsEditOpen }: Proos) => {
	const [name, setName] = useState<string>('');
	const [bio, setBio] = useState<string>('');
	const pageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (pageRef.current) {
			pageRef.current.style.transform = isEditOpen ? 'translateX(0)' : 'translateX(100%)';
			pageRef.current.style.opacity = isEditOpen ? '1' : '0';
		}
	}, [isEditOpen]);

	useEffect(() => {
		if (dbUser) {
			setName(dbUser.user_name);
			setBio(dbUser.user_bio);
		} else {
			setName('');
			setBio('');
		}
	}, [isEditOpen]);

	return (
		<div className={style.page} ref={pageRef}>
			<UserEditHeader setIsEditOpen={setIsEditOpen} />
			<main>
				<div className={style.container}>
					<div className={style.wrapper}>
						<div>名前</div>
						<InputText value={name} onInput={setName} placeholder="名前を入力してください" />
					</div>

					<div className={style.wrapper}>
						<div>自己紹介</div>
						<InputTextArea value={bio} onInput={setBio} placeholder="" />
					</div>
				</div>
			</main>
		</div>
	);
};

export default UserEdit;
