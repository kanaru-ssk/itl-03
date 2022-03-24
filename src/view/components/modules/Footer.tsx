// ロード画面

import './Footer.scss';

// 画像取得
import homeImg from 'img/home.svg';
import exploreImg from 'img/explore.svg';
import noticeImg from 'img/notice.svg';
import messageImg from 'img/message.svg';

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<ul id="menu">
				<li>
					<Link to="/" className="menu-a">
						<img src={homeImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/explore" className="menu-a">
						<img src={exploreImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/notice" className="menu-a">
						<img src={noticeImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/message" className="menu-a">
						<img src={messageImg} alt="" />
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
