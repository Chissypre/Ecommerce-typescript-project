import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { validateToken } from "../api/register";

interface AppContext {
    isLoggedIn: boolean;
    userName: string | null;
    isAdmin: boolean;
}

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const { data, isError, isLoading } = useQuery("validateToken", validateToken, {
        retry: false,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (!isLoading && !isError) {
            setIsLoggedIn(true);
            setUserName(data?.name || null);
            setIsAdmin(data?.role === "admin");
        } else {
            setIsLoggedIn(false);
            setUserName(null);
            setIsAdmin(false);
        }
    }, [data, isError, isLoading]);

    return (
        <AppContext.Provider value={{ isLoggedIn, userName, isAdmin }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};
