import React, { ReactElement } from "react";

export type State = {
    /**
     * Dictates which base token set to use theme
     */
    mode: Mode;
}


export interface Props {
    mode?: Mode;
    children: JSX.Element;
    overrides?: any; //TODO: Change this to the theme schema for nexus-design-tokens
}

export type Mode = 'dark' | 'light';
