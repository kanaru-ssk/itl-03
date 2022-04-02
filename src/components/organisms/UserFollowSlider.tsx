// 投稿一覧

// model取得
import { deleteFollow } from 'model/FollowModel';

// hooks取得
import { useSlider } from 'hooks/Slider';

// component取得
import SliderItem from 'components/atoms/SliderItem';

type Props = {
	authUid: string | undefined;
	paramsUserUid: string | undefined;
	setIsFollow: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const UserFollowSlider = ({ authUid, paramsUserUid, setIsFollow }: Props) => {
	const slider = useSlider();
	const onDeleteFollow = () => {
		slider(null);
		deleteFollow(authUid, paramsUserUid);
		setIsFollow(false);
	};
	return (
		<ul>
			<li>
				<SliderItem text="フォローをやめる" onClick={onDeleteFollow} />
			</li>
		</ul>
	);
};

export default UserFollowSlider;
