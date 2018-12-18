import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import { flexbox } from '../../common/functions';
// import { flexbox, drawBorder } from '../../common/functions';
import * as c from '../../common/constants';
import React, { 
    HBox,
    VBox,
    Header
} from '../../common/styled.components';

export const Page = styled(HBox)`
    height: 100%;
    width: 100%;
    background: papayawhip;
`;
export const Box = styled(VBox)`
    background: lightskyblue;
    padding: 3rem 7.5rem;
    border-radius: .8rem;
`;
export const Title = styled(Header)`
    color: ${ c.white };
`;
export const BookedBox = styled.div`
    width: 100%;
    margin-top: 2rem;
    ${ flexbox({ j: 'space-between' }) }
`;
