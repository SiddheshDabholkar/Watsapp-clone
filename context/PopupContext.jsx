import React, { createContext, useReducer, useMemo } from "react";


const initialState = {
    activeTab: null,
};

export const PopupContext = createContext(initialState);

const PopupReducer = (state, action) => {
    switch (action.type) {
        case "CHATS":
            state.activeTab = "CHATS";
            return state;
        case "STATUS":
            state.activeTab = "STATUS";
            return state;
        case "CALLS":
            state.activeTab = "CALLS";
            return state;
        default:
            throw new Error(`Unsupported action type: ${action.type}`);
    }
};


export const PopupContextProvider = ({ children }) => {
    const [CurrentTabName, setCurrentTabName] = useReducer(PopupReducer, initialState);
    const value = useMemo(() => ({ CurrentTabName, setCurrentTabName }), [CurrentTabName]);
    return (
        <PopupContext.Provider value={value}>
            {children}
        </PopupContext.Provider>
    );
};