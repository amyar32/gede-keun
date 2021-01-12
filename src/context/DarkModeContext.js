import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const DarkModeContext = createContext();

export function DarkModeProvider(props) {
    const [darkState, setDarkState] = useToggleState(false);
    return (
        <DarkModeContext.Provider value={{ darkState, setDarkState }}>
            {props.children}
        </DarkModeContext.Provider>
    );
}
