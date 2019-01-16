import React from 'react';
import Card from '../Card/Card';

const List = ( {displayed_list,pick} ) => {
    return (
      	<div className="cards-list">
			<ul>
				{
                displayed_list.map((e, item) => {
                    return (
                        <Filtered key={i} onClick={()=>pick(item)}>
                        <Card {...item}/>
                        </Filtered>
                    )
                })
				}
			</ul>
		</div>
    )
}
export default List
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
