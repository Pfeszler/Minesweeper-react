import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 2px;
`
export const Button = styled.button`
    min-width: 50px;
    min-height: 50px;
    border: 1px solid black;
`