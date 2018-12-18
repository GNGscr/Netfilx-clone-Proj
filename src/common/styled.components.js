import styled from 'styled-components';
import { lighten,darken } from 'polished';
import { flexbox } from './functions';
import * as s from './constants';

// common styled-components

export const VBox = styled.div`
    ${ flexbox( {d:'column'} ) }
`;
export const HBox = styled.div`
    ${ flexbox() }
`;
export const Header = styled.h1`
    font-size: 5rem;
    font-weight: normal;
    font-family: 'Griffy', cursive;
    text-align: center;
    color: ${ c.darkBlue };
`;
export const Subtitle = styled.h2`
    font-size: 4rem;
    font-weight: 400;
    font-family: 'Yanone Kaffeesatz', sans-serif;
color: ${ c.darkBlue };
`;
export const Button = styled.button`
    outline-style: none;
    border-style: none;
    background: ${ c.pink };
    text-transform: uppercase;
    color: white;
    font-size: 2.8rem;
    padding: 1rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    &:hover {
        background: ${ darken(.1, c.pink) }
    }
    &:active {
        background: ${ lighten(.1, c.pink) }
    }
`;

export const Hline = styled.div`
    border: 0; 
    height:2px;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    background: linear-gradient(to right, rgba(46, 154, 199, 0), rgba(46, 154, 199, 1), rgba(46, 154, 199, 0) );
`;
//--------
export const HeadLine = styled.div`
    margin-left: 30px;
    margin-top: -40px;
`;