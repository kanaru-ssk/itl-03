import React, { createContext, useState, useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

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
            setUser(user);
        });
        return () => {
            unsubscribed();
        };
    }, [auth]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
