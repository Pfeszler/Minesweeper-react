import React from "react"
import { GlobalStyle } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import GameField from "./GameField"
import StartingScreen from "./StartingScreen"
import Container from "./Container"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <StartingScreen />
        <GameField />
      </Container>
    </ThemeProvider>
  );
}

export default App;
