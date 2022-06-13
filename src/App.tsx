import React from "react";
import "./App.css";
import ThemeContext from "./theme/ThemeProvider/ThemeContext";
import ThemeProvider from "./theme/ThemeProvider/ThemeProvider";
import { ThemeOverrides } from "./theme/ThemeProvider/ThemeProvider.types";

function App() {
  /**
   * This is an example of how an end developer can provide Theme overrides to the default base tokens
   */
  const customThemeVariables: ThemeOverrides = {
    "color-brand-content-contrast-none": "#FF5252",
    "color-brand-content-strong-none": "#FF5252",
    "color-brand-background-neutral-none": "#FF5252",
  };

  return (
    <ThemeProvider overrides={customThemeVariables}>
      <ThemeContext.Consumer>
        {(context) => (
          <div className="App">
            <header className="App-header">
              <p>
                {context.mode} Theme
              </p>
              <button
                onClick={() => {
                  const { mode, toggleMode } = context;
                  toggleMode(mode === "dark" ? "light" : "dark");
                }}
                className="myButton"
              >
                Click to switch theme
              </button>
            </header>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
