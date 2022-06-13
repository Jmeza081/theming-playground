import React, { Component } from "react";
import { Mode, State, Props, ThemeOverrides } from "./ThemeProvider.types";
import ThemeContext from "./ThemeContext";
import "nexus-design-tokens/dist/web/css/tokens-light.css";
import "nexus-design-tokens/dist/web/css/tokens-dark.css";

export default class ThemeProvider extends Component<Props, State> {
  state: State = {
    // Interpret the mode passed in. If not supplied we default to light mode
    mode: this.props.mode ?? "light",
  };

  /**
   * toggle between light and dark mode base tokens.
   * @param mode Mode - new mode to switch to
   */
  toggleMode = (mode: Mode) => {
    this.setState({ mode });
  };

  /**
   * Converts human-readable CTI tokens to an object of
   * CSS Variables
   * @param {ThemeOverrides} themeOverrides - object
   * @returns {Object} of token name as CSS variable to value
   *
   * @example
   * converts the following
   * ```js
   * { "color-brand-content-contrast-none": "#FF5252" }
   * ```
   *
   * into
   * ```js
   * "--color-brand-content-contrast-none": "#FF5252",
   * ```
   */
  toCSSVariables = (themeOverrides: ThemeOverrides | undefined) => {
    if (!themeOverrides) return;

    const cssVars: any = {};
    Object.entries(themeOverrides).forEach((entry) => {
      return (cssVars[`--${entry[0]}`] = entry[1]);
    });

    return cssVars;
  };

  render() {
    const { overrides } = this.props;

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
          <div style={this.toCSSVariables(overrides)}>
            {this.props.children}
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
