import React from 'react';
import styled from 'styled-components';

export const Card = ( {title,poster} ) => {
//	console.log('first_name:',first_name)
//	console.log('props:',props)
    return (
        <Card>
            <IMG src={poster} alt="" />
            {title}
        </Card>
    )
}
export const IMG = styled.img`
    height: 5vw;
    width: 9vw;
    margin-right: 1vw;
    margin-left: 1vw;
    @media all and (min-width: 1400px) {
    height: 2.3vw;
    width: 3.8vw;
    margin-left: .5vw;
    margin-right: .5vw; 
    }
`;
export const Card = styled.div`
    display: flex;

`;

// export default ( {title,poster} ) => {
// //	console.log('first_name:',first_name)
// //	console.log('props:',props)
//     return (
//         <Card>
//       		<Thumb image_url={poster}/>
//       		<div>
//       			<p>{title}</p>
//       		</div>
//         </Card>
//     )
// }

