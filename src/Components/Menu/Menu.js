import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

let MenuContainer = styled.div`
    display: block;
    position: absolute;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
`;

let ToggleButton = styled.input`
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
`