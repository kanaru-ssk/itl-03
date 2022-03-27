// ユーザーアイコン

// css取得
import style from './Ogp.module.scss';

// 画像取得
import externalImg from 'img/external.svg';

// component取得
import OgpTitle from 'components/atoms/OgpTitle';
import OgpDescription from 'components/atoms/OgpDescription';
import OgpUrl from 'components/atoms/OgpUrl';
import OgpImage from 'components/atoms/OgpImage';

type Props = {
	ogp: ogp | undefined;
	url: string;
};

const Ogp = ({ ogp, url }: Props) => {
	return (
		<a href={url}>
			<div className={style.container}>
				<div className={style.image}>
					<OgpImage src={ogp?.image} />
				</div>
				<div className={style.title}>
					<OgpTitle title={ogp?.title} />
				</div>
				<div className={style.url}>
					<OgpUrl url={ogp?.url ? ogp.url : url} />
				</div>

				<div className={style.description}>
					<OgpDescription description={ogp?.description} />
				</div>
				<img className={style.external} src={externalImg} alt="external" />
			</div>
		</a>
	);
};

export default Ogp;