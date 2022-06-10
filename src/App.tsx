import React from 'react';
import './App.css';
import ThemeContext from './theme/ThemeProvider/ThemeContext';
import ThemeProvider from './theme/ThemeProvider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ThemeContext.Consumer>
            {context => 
              <button onClick={() => {
                const { mode, toggleMode } = context;
                toggleMode(mode === 'dark' ? 'light': 'dark');
              }} className="myButton">
                Switch Theme
              </button>
            }
          </ThemeContext.Consumer>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
