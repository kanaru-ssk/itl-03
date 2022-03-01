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

type AuthContextProps = User | null;

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(null);

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<AuthContextProps>(null);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
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

// twitterログイン処理
export const loginWithTwitter = () => {
    const auth = getAuth();
    const provider = new TwitterAuthProvider();

    signInWithRedirect(auth, provider);
};

// ログアウト処理
export const logout = () => {
    const auth = getAuth();
    signOut(auth);
};
