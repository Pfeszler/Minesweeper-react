import React from "react"
import GameField from "./GameField"
import { GlobalStyle } from "./GlobalStyles"
import StartingScreen from "./StartingScreen"

function App() {
  return (
    <GlobalStyle>
      <StartingScreen />
      <GameField />
    </GlobalStyle>
  );
}

export default App;
