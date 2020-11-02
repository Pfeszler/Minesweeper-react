import React from "react"
import { GlobalStyle } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import GameField from "./GameField"
import StartingScreen from "./StartingScreen"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <StartingScreen />
        <GameField />
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
