// Write your Character component here
import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 40%;
    margin: 1% auto;
    background: rgba(255, 232, 31, .5);
    border: 2px solid black;
`

const Character = props => {
    const { name } = props;
    return (
        <Div>
            <h2>{ name }</h2>
        </Div>
    )
}

export default Character;