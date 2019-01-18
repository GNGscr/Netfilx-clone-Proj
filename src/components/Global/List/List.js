import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const List = ( {displayed_list,pick} ) => {
    return (
        <div className="cards-list">
        <ul>
        {
        displayed_list.map((e, i) => {
            return (
                <Filtered key={i} onClick={()=>pick(i)}>
                <Card {...i}/>
                </Filtered>
            )
        })
        }
        </ul>
    </div>

    )
}
export default List



export const Filtered = styled.div`
    margin: .08vw;
    top: -11vw;
    position: relative;
    display: flex;
    padding: 6vw 0;
    padding-left: .5vw;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 .2rem .8rem DimGrey;
    font-size: 12px;
    border: 1px solid rgba(128, 128, 128, 0.8);
    width: 90%;
    cursor: pointer;
    @media all and (min-width: 1400px) {
        padding: 2vw 0;
        font-size: 18px;
        top: -2vw; 
    }
`;
//     return (
//       	<div className="cards-list">
// 			<ul>
// 				{
// 					list_data.map( item =>  
// 						<li key={item.id} 
// 							className="card-item" 
// 							onClick={()=>pick(item)}> 
// 							<Card {...item} /> 
// 						</li> 
// 					)
// 				}
// 			</ul>
// 		</div>
//     )
// }
// export default List
