// ヘッダー

// img取得
import menuImg from 'img/menu.svg';

// react取得
import { useContext } from 'react';

// model取得
import { ModalContext } from './Modal';

// component取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';
import UserHeaderMenu from 'components/organisms/UserHeaderMenu';

type Props = {
	paramsUserId: string | undefined;
};

const UserHeader = ({ paramsUserId }: Props) => {
	const modal = useContext(ModalContext);
	const onClick = () => {
		modal(<UserHeaderMenu paramsUserUid={paramsUserId} />);
	};
	return (
		<Header>
			<UserId>{paramsUserId}</UserId>
			<img src={menuImg} alt="menu" onClick={onClick} />
		</Header>
	);
};

export default UserHeader;
