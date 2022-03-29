// ヘッダー

// img取得
import menuImg from 'img/menu.svg';

// component取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';

type Props = {
	paramsUserId: string | undefined;
};

const UserHeader = ({ paramsUserId }: Props) => {
	return (
		<Header>
			<UserId>{paramsUserId}</UserId>
			<img src={menuImg} alt="menu" />
		</Header>
	);
};

export default UserHeader;
