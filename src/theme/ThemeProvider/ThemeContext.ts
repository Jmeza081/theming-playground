import React, { createContext } from "react";
import { Mode } from "./ThemeProvider.types";

export interface Context {
    mode: Mode,
    toggleMode: Function,
}

const initialContextValue: Context = {
    mode: 'light',
    toggleMode: () => {}
}

const ThemeContext = createContext(initialContextValue);

export default ThemeContext;
