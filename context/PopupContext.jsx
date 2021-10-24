import React from 'react'
import { createContext,useReducer } from "react";


const initialState={
    activeTab:null,
}

export const PopupContext=createContext(initialState)

const PopupReducer=(state,action)=>{
    switch(action.type){
        case "CHATS":
            state.activeTab="CHATS";
            return {...state};
        case "STATUS":
            state.activeTab="STATUS";
            return {...state};
        case "CALLS":
            state.activeTab="CALLS";
            return {...state};
        default:
            throw new Error("invalid state")
    }
}


export const PopupContextProvider=({children})=>{
    const [CurrentTabName,setCurrentTabName]=useReducer(PopupReducer,initialState)
    return(
        <PopupContext.Provider value={{CurrentTabName,setCurrentTabName}}>
            {children}
        </PopupContext.Provider>
    )
}