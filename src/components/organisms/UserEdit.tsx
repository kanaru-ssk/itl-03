// プロフィール編集ページ

// react取得
import { useState, useEffect } from 'react';

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

	useEffect(() => {
		if (dbUser) {
			setName(dbUser.user_name);
			setBio(dbUser.user_bio);
		} else {
			setName('');
			setBio('');
		}
	}, [isEditOpen]);

	const onInputName = (e: any) => {
		if (30 < e.length) return;
		setName(e);
	};

	const onInputBio = (e: any) => {
		const newBio = e;
		if (200 < newBio.length) return;
		setBio(newBio);
	};

	return (
		<div
			className={style.page}
			style={
				isEditOpen
					? { opacity: 1, transform: `translate(0, 0)` }
					: { opacity: 0, transform: `translate(100%, 0)` }
			}
		>
			<UserEditHeader name={name} bio={bio} dbUser={dbUser} setIsEditOpen={setIsEditOpen} />
			<div className={style.container}>
				<div className={style.wrapper}>
					<div>名前</div>
					<InputText value={name} onInput={onInputName} placeholder="名前を入力してください" />
				</div>

				<div className={style.wrapper}>
					<div>自己紹介</div>
					<InputTextArea value={bio} onChange={onInputBio} placeholder="" />
				</div>
			</div>
		</div>
	);
};

export default UserEdit;
