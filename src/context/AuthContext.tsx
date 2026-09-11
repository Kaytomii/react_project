import { createContext, useState, useEffect } from "react";

type AuthContextType = {
    user: string | null;
    accessToken: string | null;
    login: (email: string, token: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    accessToken: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const savedToken = localStorage.getItem("accessToken");

        if (savedUser) setUser(savedUser);
        if (savedToken) setAccessToken(savedToken);
    }, []);

    const login = (email: string, token: string) => {
        setUser(email);
        setAccessToken(token);

        localStorage.setItem("user", email);
        localStorage.setItem("accessToken", token);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};