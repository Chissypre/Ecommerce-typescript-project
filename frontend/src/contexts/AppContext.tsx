import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { validateToken } from "../api/register";

interface AppContext {
    isLoggedIn: boolean;
    userName: string | null;
}

const AppContext = createContext<AppContext | undefined>(undefined);
export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { data, isError } = useQuery("validateToken", validateToken, {
        retry: false,
    });

    return (
        <AppContext.Provider value={{ isLoggedIn: !isError, userName: data?.name }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
};
