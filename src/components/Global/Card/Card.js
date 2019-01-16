import React, { Component } from 'react';


export default ( {title,poster} ) => {
//	console.log('first_name:',first_name)
//	console.log('props:',props)
    return (
        <Card>
            <IMG src={poster} alt="" />
            {title}
        </Card>
    )
}
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

