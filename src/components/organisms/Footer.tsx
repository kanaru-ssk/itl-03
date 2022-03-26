// フッター

import style from './Footer.module.scss';

// 画像取得
import homeImg from 'img/home.svg';
import exploreImg from 'img/explore.svg';
import noticeImg from 'img/notice.svg';
import messageImg from 'img/message.svg';

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<nav>
				<ul className={style.menu}>
					<li>
						<Link to="/" className={style.a}>
							<img src={homeImg} alt="home-icon" />
						</Link>
					</li>

					<li>
						<Link to="/explore" className={style.a}>
							<img src={exploreImg} alt="explore-icon" />
						</Link>
					</li>

					<li>
						<Link to="/notice" className={style.a}>
							<img src={noticeImg} alt="notice-icon" />
						</Link>
					</li>

					<li>
						<Link to="/message" className={style.a}>
							<img src={messageImg} alt="message-icon" />
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
