import styled,{keyframes} from 'styled-components';
// import { lighten,darken } from 'polished';
import { flexbox } from '../../common/functions';
import { 
    Header
} from '../../common/styled.components';
// import { constants as c } from '../../common/constants';

const spin = keyframes`
    from    { transform: rotate(0deg) }
    to      { transform: rotate(360deg) }
`;

export const Box = styled.div`
    ${ flexbox({j:'space-around'}) }
    background: slategray;
    width:100%;
    height: 70px;
    padding: 20px;
    color: white;
    position:fixed;
    top:0;
    left:0;
`;
export const Title = styled(Header)`
    font-size: 3rem;
    color: mintcream;
    text-align: left;
`;
export const Logo = styled.img`
    height: 5rem;
    animation: ${spin} 2s linear infinite;
`;
