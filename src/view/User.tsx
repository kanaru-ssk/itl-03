// ユーザーページ

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../model/AuthModel";

const User = () => {
    const { paramsUid } = useParams();
    const user = useContext(AuthContext);

    return (
        <div>
            <h1>User</h1>
            <div>パラメーターuid : {paramsUid}</div>
            <div>ログインuid : {user ? user?.uid : "false"}</div>
            <div>
                表示 :
                {user?.uid === paramsUid ? " マイページ" : " ユーザーページ"}
            </div>
        </div>
    );
};

export default User;
