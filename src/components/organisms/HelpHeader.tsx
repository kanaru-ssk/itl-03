// ヘルプヘッダー

// react取得
import { useNavigate } from 'react-router-dom';

// img取得
import prevImg from 'img/prev.svg';

// component取得
import Header from 'components/atoms/Header';

const HelpHeader = () => {
	const navigate = useNavigate();
	return (
		<Header>
			<img onClick={() => navigate(-1)} src={prevImg} alt="menu" />
			<div>ヘルプセンター</div>
			<div></div>
		</Header>
	);
};

export default HelpHeader;
