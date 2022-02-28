import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../model/AuthModel";

const User = () => {
    const { uid } = useParams();
    const user = useContext(AuthContext);

    return (
        <div>
            <h1>User</h1>
            <div>パラメーターuid : {uid}</div>
            <div>ログインuid : {user ? user?.uid : "false"}</div>
        </div>
    );
};

export default User;
