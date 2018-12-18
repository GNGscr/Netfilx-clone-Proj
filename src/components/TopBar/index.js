import React from 'react';
import logo from '../../common/logo.svg';
import {
    Box,
    Title,
    Logo
} from './styles';

export default ({children}) => {
    return (
        <Box>
            <Title>{children}</Title>
            <Logo src={logo} alt="logo" />
        </Box>
    )
}