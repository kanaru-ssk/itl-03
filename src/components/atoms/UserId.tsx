// ユーザーID

// css取得
import style from './UserId.module.scss';

type Props = {
	id: string | undefined;
};

const UserId = ({ id }: Props) => {
	return <span className={style.id}>@{id}</span>;
};

export default UserId;
