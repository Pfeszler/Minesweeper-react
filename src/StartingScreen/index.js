import React from "react"
import { useSelector } from "react-redux"
import { selectStarted } from "../gameSlice"
import { Button, Container, FlexBox, Header, Subheader, Text } from "./styled";
import useStartingScreen from "./useStartingScreen";


const StartingScreen = () => {

    const started = useSelector(selectStarted);
    const [onStartClick] = useStartingScreen()


    return !started && (
        <Container>
            <Header>
                Minesweeper Game
            </Header>
            <Text>
                Welcome
            </Text>
            <Subheader>
                Chose Difficulty Level:
            </Subheader>
            <FlexBox>
                <Button
                    onClick={() => onStartClick()}
                    difficulty="easy"
                >
                    Easy
                </Button>
                <Button
                    onClick={() => onStartClick()}
                    difficulty="medium"
                >
                    Medium
                </Button>
                <Button
                    onClick={() => onStartClick()}
                    difficulty="hard"
                >
                    Hard
                </Button>
            </FlexBox>
        </Container>
    )
}

export default StartingScreen 