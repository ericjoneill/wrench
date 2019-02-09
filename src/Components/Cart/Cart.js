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

let CheckoutButton = styled.button`
    border-style: none;
    font-size: 16px;
    color: white;
    width: 100%;
    height: 50px;
    cursor: pointer;
    border-radius: 0;
    font-weight: normal;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    transition: all 0.2s ease;
    padding: 0;


`;
class Cart extends React.Component {

    constructor() {
        super();

        this.state = {
            isRedirect: false,
            redirectPath: '/login',
            showPopup: false,
            askedUser: false,
            cartTotal: 0,
            savingsTotal: 0,
            orderTotal: 0
        }
    }
}