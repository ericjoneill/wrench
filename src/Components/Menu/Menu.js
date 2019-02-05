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
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;

    &:checked ~ ul
    {
      transform: scale(1.0, 1.0) !important;
      opacity: 1;
    }
    &:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }
    &:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    &:checked ~ span:nth-last-child(2)
    {
      opacity: 1;
      transform: rotate(-45deg) translate(0, -1px);
    }
`;
