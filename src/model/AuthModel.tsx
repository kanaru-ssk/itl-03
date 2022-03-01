// 認証関係の処理

import React, { createContext, useState, useEffect } from "react";
import {
    User,
    getAuth,
    onAuthStateChanged,
    signInAnonymously,
    signInWithRedirect,
    TwitterAuthProvider,
    signOut,
} from "firebase/auth";

type AuthContextProps = {
    authUser: User | null;
    dbUser: {
        uid: string;
        user_name: string;
        user_icon: string;
        list_title: string;
        user_bio: string;
        twitter_disp_id: string;
        twitter_sys_id: Date;
        user_regist_date: Date;
    } | null;
};

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>({
    authUser: null,
    dbUser: null,
});

// ログイン認証
export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<AuthContextProps>({
        authUser: null,
        dbUser: null,
    });

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser({ authUser: user, dbUser: null });

                const { getUserData, createUserData } = await import(
                    "./UserModel"
                );
                const userData = await getUserData(user.uid);
                if (!userData) {
                    createUserData(user);
                }
            } else {
                signInAnonymously(auth);
            }
        });
        return () => {
            unsubscribed();
        };
    }, [auth]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// twitterログイン
export const loginWithTwitter = () => {
    const auth = getAuth();
    const provider = new TwitterAuthProvider();

    signInWithRedirect(auth, provider);
};

// ログアウト
export const logout = () => {
    const auth = getAuth();
    signOut(auth);
};
