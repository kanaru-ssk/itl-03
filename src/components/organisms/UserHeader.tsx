// ヘッダー

// img取得
import menuImg from 'img/menu.svg';

// hooks取得
import { useSlider } from 'hooks/Slider';

// component取得
import Header from 'components/atoms/Header';
import UserId from 'components/atoms/UserId';
import UserHeaderMenu from 'components/organisms/UserHeaderMenu';

// css取得
import style from './UserHeader.module.scss';
type Props = {
	paramsUserId: string | undefined;
};

const UserHeader = ({ paramsUserId }: Props) => {
	const slider = useSlider();
	const onClick = () => {
		slider(<UserHeaderMenu paramsUserUid={paramsUserId} />);
	};
	return (
		<Header>
			<div className={style.id}>
				<UserId>{paramsUserId}</UserId>
			</div>

			<img className={style.menu} src={menuImg} alt="menu" onClick={onClick} />
		</Header>
	);
};

export default UserHeader;
