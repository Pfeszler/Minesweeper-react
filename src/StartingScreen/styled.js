import styled, { css } from "styled-components"

export const Container = styled.section`
    max-width: 668px;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: unset;
        margin: 0 15px;
    }
`

export const Header = styled.h1`
    text-align: center;
    font-size: 36px;
`

export const Text = styled.p`
    text-align: justify;
    font-size: 16px;
`

export const Subheader = styled.h2`
    font-size: 25px;
    text-align: center;
`

export const FlexBox = styled.div`
    width: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

`

export const Button = styled.button`
    padding: 10px 20px;
    margin: 7px 0;
    font-weight: bold;
    border: 3px solid ${({ theme }) => theme.color.difficultyButtonColor};
    color: ${({ theme }) => theme.color.difficultyButtonColor};

    ${({ difficulty }) => difficulty === "easy" && css`
        background-color: ${({ theme }) => theme.color.easyButton};
    `}

    ${({ difficulty }) => difficulty === "medium" && css`
        background-color: ${({ theme }) => theme.color.mediumButton};
    `}

    ${({ difficulty }) => difficulty === "hard" && css`
        background-color: ${({ theme }) => theme.color.hardButton};
    `}
`