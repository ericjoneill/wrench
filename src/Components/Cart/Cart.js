import React from 'react';
import styled from 'styled-components';


let RemoveButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #97002f;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: default;
    transition: all 0.3s ease;
    border: none;
    font-weight: lighter;

    &:hover {
        border: 1px solid #97002f;
        background-color: white;
        color: #97002f;
        font-weight: bold;
    }

    @media only screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`;

