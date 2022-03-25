// ロード画面

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
			<ul className={style.menu}>
				<li>
					<Link to="/" className={style.a}>
						<img src={homeImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/explore" className={style.a}>
						<img src={exploreImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/notice" className={style.a}>
						<img src={noticeImg} alt="" />
					</Link>
				</li>

				<li>
					<Link to="/message" className={style.a}>
						<img src={messageImg} alt="" />
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
