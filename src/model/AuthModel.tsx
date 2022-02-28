import React, { createContext, useState, useContext, useEffect } from "react";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";

type AuthContextProps = Auth | null;

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(null);

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<AuthContextProps>(null);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setUser(auth);
        });
        return () => {
            unsubscribed();
        };
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
