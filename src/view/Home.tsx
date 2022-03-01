// トップページ

import { useContext } from "react";
import { AuthContext, loginWithTwitter, logout } from "../model/AuthModel";

const Home = () => {
    const user = useContext(AuthContext);

    if (user) {
        if (user?.isAnonymous) {
            return (
                <div>
                    <h1>Login</h1>
                    <div>匿名認証なのでログイン画面を表示</div>
                    <div>ログインuid : {user?.uid}</div>
                    <button onClick={loginWithTwitter}>ログイン</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Home</h1>
                    <div>tiwtter認証済みなのでホームを表示</div>
                    <div>ログインuid : {user?.uid}</div>
                    <button onClick={logout}>ログアウト</button>
                </div>
            );
        }
    } else {
        return (
            <div>
                <h1>Loading ...</h1>
                <div>認証状態を確認中</div>
            </div>
        );
    }
};

export default Home;
