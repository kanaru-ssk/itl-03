// ユーザーページ

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../model/AuthModel";

// 認証されていない => ユーザーページ
// 認証済み + 匿名認証 => ユーザーページ
// 認証済み + 表示userとログインuserが異なる => ユーザーページ
// 認証済み + 表示userとログインuserが同じ => マイページ

const User = () => {
    const { paramsUid } = useParams();
    const user = useContext(AuthContext);
    const authUser = user.authUser;

    if (authUser?.uid === paramsUid) {
        return (
            <div>
                <h1>User</h1>
                <h2>マイページ</h2>
                <div>パラメーターuid : {paramsUid}</div>
                <div>ログインuid : {authUser?.uid}</div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>User</h1>
                <h2>ユーザーページ</h2>
                <div>パラメーターuid : {paramsUid}</div>
                <div>ログインuid : {authUser?.uid}</div>
                <div>認証状態 : {authUser ? "認証済み" : "未認証"}</div>
                <div>
                    認証種別 :{" "}
                    {authUser?.isAnonymous ? "匿名" : "twitterログイン"}
                </div>
            </div>
        );
    }
};

export default User;
