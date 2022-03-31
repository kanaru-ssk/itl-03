// ヘッダー

// img取得
import menuImg from 'img/menu.svg';

// react取得
import { useContext } from 'react';

// hooks取得
import { useSlider } from 'hooks/Slider';

// component取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';
import UserHeaderMenu from 'components/organisms/UserHeaderMenu';

type Props = {
	paramsUserId: string | undefined;
};

const UserHeader = ({ paramsUserId }: Props) => {
	const modal = useSlider();
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
