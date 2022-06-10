import React, { Component } from "react";
import { Mode, State, Props } from "./ThemeProvider.types";
import ThemeContext from "./ThemeContext";
import 'nexus-design-tokens/dist/web/css/tokens-light.css';

export default class ThemeProvider extends Component<Props, State> {
  state: State = {
    // Interpret the mode passed in. If not supplied we default to light mode
    mode: this.props.mode ?? 'light'
  };

  /**
   * toggle between light and dark mode base tokens.
   * @param mode Mode - new mode to switch to
   */
  toggleMode = (mode: Mode) => {
    this.setState({ mode });
  };

  /**
   * 
   * @param themeOverrides 
   */
  deepMergeOverrides = (themeOverrides: any) => {};

  render() {

    /**
     * We have a choice here. We can either
     * 1. Use style-dictionary to create a TypeScript schema that emulates the structure below (without the '--')
     * 2. We store the schema as a javascript object and convert to CSS variables as overrides.
     * 
     * Can we also scope these under a class like `.theme-overrides`? 
     */
    const overrides: any = {
      '--color-brand-content-contrast-none': '#FF5252',
      '--color-brand-content-strong-none': '#FF5252',
      '--color-brand-background-accent-none': '#FF5252',
      '--color-brand-background-contrast-active': '#FF5252',
      '--color-brand-background-contrast-hover': '#FF5252',
      '--color-brand-background-contrast-none': '#FF5252',
      '--color-brand-background-strong-active': '#FF5252',
      '--color-brand-background-strong-hover': '#FF5252',
      '--color-brand-background-strong-none': '#FF5252',
      '--color-brand-background-neutral-active': '#FF5252',
      '--color-brand-background-neutral-hover': '#FF5252',
      '--color-brand-background-neutral-none': '#FF5252',
    };
    /**
     * Using the provider/consumer pattern, we thread additional props
     * to all consuming components such as `mode`, `toggleMode` etc.
     * 
     * Note the use `className={this.state.mode}`, we leverage style-dictionary's
     * ability to scope CSS variables under one selector. In our case, we supply 
     * 2 base themes: `.dark` and `.light` tokens. We then use state to toggle
     * between the two.
     * 
     * In addition to this, we leverage the themeOverrides to allow for white labeling
     * products, allowing the developer to override the current theme mode.
     */
    return (
      <ThemeContext.Provider
        value={{
          mode: this.state.mode,
          toggleMode: this.toggleMode,
        }}
      >
        <div className={this.state.mode}>
          <div style={{
            ...overrides
          }}>
            {this.props.children}
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
