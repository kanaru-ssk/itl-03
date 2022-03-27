// ヘッダー

// img取得
import menuImg from 'img/menu.svg';

// component取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';

type Props = {
	paramsUid: string | undefined;
};

const UserHeader = ({ paramsUid }: Props) => {
	return (
		<Header>
			<UserId>{paramsUid}</UserId>
			<img src={menuImg} alt="menu" />
		</Header>
	);
};

export default UserHeader;
