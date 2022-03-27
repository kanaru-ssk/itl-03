// ヘッダー

// 画像取得
import menuIgm from 'img/menu.svg';

// コンポーネント取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';

type Props = {
	paramsUid: string | undefined;
};

const UserHeader = ({ paramsUid }: Props) => {
	return (
		<Header>
			<UserId>{paramsUid}</UserId>
			<img src={menuIgm} alt="menu" />
		</Header>
	);
};

export default UserHeader;
