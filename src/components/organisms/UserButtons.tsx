// ユーザーページのボタン

// 匿名認証 => フォローボタン
// dbUser == null => ローディング
// dbUser == paramsUser => プロフィール編集ボタン
// paramsUserフォローチェック中 => ローディング
// paramsUserフォロー済み => フォロー中ボタン + メッセージボタン
// paramsUser未フォロー => フォローボタン

// react取得
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// model取得
import { follow, checkFollow } from 'model/FollowModel';

// hooks取得
import { useAuth } from 'hooks/Auth';
import { useSlider } from 'hooks/Slider';

// component取得
import UserButtonContainer from 'components/atoms/UserButtonContainer';
import Button from 'components/atoms/Button';
import ButtonOrange from 'components/atoms/ButtonOrange';
import ButtonLoading from 'components/atoms/ButtonLoading';
import UserFollowSlider from 'components/organisms/UserFollowSlider';

type Props = {
	paramsUserId: string | undefined;
	paramsUser: dbUser;
	setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserButtons = ({ paramsUserId, paramsUser, setIsEditOpen }: Props) => {
	const navigate = useNavigate();
	const user = useAuth();
	const slider = useSlider();

	const [isFollow, setIsFollow] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		if (user.authUser && paramsUserId) {
			checkFollow(user.authUser.uid, paramsUserId).then((result) => {
				setIsFollow(result);
			});
		}
	}, [user, paramsUserId]);

	const onClickFollow = () => {
		follow(user.dbUser?.user_uid, paramsUser);
		setIsFollow(true);
	};

	if (user.authUser?.isAnonymous) {
		return (
			<UserButtonContainer>
				<ButtonOrange onClick={() => navigate('/')}>フォロー</ButtonOrange>
			</UserButtonContainer>
		);
	} else if (!user.dbUser) {
		return (
			<UserButtonContainer>
				<ButtonLoading />
			</UserButtonContainer>
		);
	} else if (user.dbUser.user_id === paramsUserId) {
		return (
			<UserButtonContainer>
				<Button onClick={() => setIsEditOpen(true)}>プロフィール編集</Button>
			</UserButtonContainer>
		);
	} else if (isFollow === undefined) {
		return (
			<UserButtonContainer>
				<ButtonLoading />
			</UserButtonContainer>
		);
	} else if (!isFollow) {
		return (
			<UserButtonContainer>
				<ButtonOrange onClick={onClickFollow}>フォロー</ButtonOrange>
			</UserButtonContainer>
		);
	} else {
		return (
			<UserButtonContainer>
				<Button
					onClick={() =>
						slider(
							<UserFollowSlider
								authUid={user.dbUser?.user_uid}
								paramsUserUid={paramsUser?.user_uid}
								setIsFollow={setIsFollow}
							/>
						)
					}
				>
					フォロー中
				</Button>
				<Button onClick={() => navigate('/message')}>メッセージ</Button>
			</UserButtonContainer>
		);
	}
};

export default UserButtons;
