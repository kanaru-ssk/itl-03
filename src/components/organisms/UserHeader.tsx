// ヘッダー

// 画像取得
import menuIgm from 'img/menu.svg';

// React取得
import { useContext } from 'react';

// model取得
import { AuthContext } from 'model/AuthModel';

// コンポーネント取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';

type Props = {
	paramsUid: string | undefined;
};

const UserHeader = ({ paramsUid }: Props) => {
	const user = useContext(AuthContext);

	return (
		<Header>
			<UserId>{paramsUid}</UserId>
			<img src={menuIgm} alt="menu-button" />
		</Header>
	);
};

export default UserHeader;
