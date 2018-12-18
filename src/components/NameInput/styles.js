import styled from 'styled-components';
// import { lighten,darken } from 'polished';
import * as f from '../../common/functions';
// import { flexbox,drawBorder } from '../../common/functions';
import * as c from '../../common/constants';
import { VBox, Subtitle } from '../../common/styled.components';

export const Box = styled(VBox)`
    width:100%;
`;
export const InputBox = styled.div`
    justify-content: 'space-between';
    width:100%;
    ${ f.flexbox({j:'space-between'}) }
`;
export const WhiteTitle = styled(Subtitle)`
    text-transform: capitalize; 
    color:${c.white};
    text-align:left;
    width:100%;
`;

export const Input = styled.input`
    border-radius: .5rem;
    outline: none;
    border: 2px aqua solid;
    border: none;
    padding: 1rem 2rem;
    font-size: 2rem;
    text-transform: capitalize;
`;
