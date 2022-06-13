import { Theme } from 'nexus-design-tokens/dist/web/Theme';

export type State = {
    /**
     * Dictates which base token set to use theme
     */
    mode: Mode;
}

export type ThemeOverrides = Partial<Theme>;

export interface Props {
    mode?: Mode;
    children: JSX.Element;
    overrides?: ThemeOverrides;
}

export type Mode = 'dark' | 'light';
