import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import Slider from '../Slider/Slider';
import { AppDiv, Hero } from './SearchPage.styles';




class App extends Component {
  state = {
    msg: "temp msg"
  }
  // async componentDidMount(){
  //     const response = await fetch('/api/hello')
  //     const data = await response.text()
  //     this.setState({msg:data});
  // }
  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/6271d/c582052a42712d62ecc28b5919116d3742e6271d.webp" alt=""></Hero>
          <LogoAndText />
          <Slider/>
          <Slider/>
          <Slider/>
          <Slider/>
          <Slider/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, est nobis molestias magnam amet eum tenetur, earum, minus consectetur alias totam repudiandae! Eius ratione quam sunt quis labore cum porro. Nemo sed assumenda voluptatibus tempora tenetur quibusdam reprehenderit, modi qui cumque! Voluptas ipsum labore ipsam dolores, voluptate omnis dolore explicabo reiciendis quae libero similique iusto ea excepturi adipisci velit hic cum fugiat accusamus officia laborum reprehenderit tempore. Placeat, incidunt rem deserunt saepe provident iusto ut? Minus excepturi nihil ipsum illo non ducimus, veniam repellat unde blanditiis! Tempore distinctio, ipsa voluptatem debitis eum saepe optio libero reprehenderit nam, sed impedit et consequatur. Ipsum facere ullam obcaecati ratione, dolorum quos sequi magnam sunt aliquam, porro, minima aperiam voluptatibus sit! Voluptate maiores esse nemo dolor facilis eum rerum nam! Explicabo repellendus blanditiis aspernatur magni a odio, ab quia deserunt laudantium ex modi voluptate nobis dicta. Magni consequatur, labore asperiores nam hic illum impedit maiores maxime molestias nobis veritatis vel dicta ab unde? Inventore, a! Neque consectetur, laudantium eos error veniam porro, reprehenderit voluptatem recusandae tempora, quo debitis. Beatae maxime id quibusdam atque officiis vel dolore eaque fuga eos numquam dolorem nobis iure magni, repellat eius laborum. Inventore consequuntur, saepe nobis necessitatibus vel cumque.</p>
      </AppDiv>
    );
  }
}

export default App;





// const font1_medium = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Medium-Opt.woff2"
// const font2_regular = "https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v2/NetflixSans-Regular-Opt.woff2"
// const font3_icon_v1_93 = "https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff"




// import React,{ Component } from 'react'

// import {
//     // BrowserRouter,
//     HashRouter,
//     Route
// } from 'react-router-dom';
// // import { connect } from 'react-redux'

// import Browse from './components/Browse';


// class App extends Component {
//     render() {
//         // const {

//         // } = this.props;

//         return (
//             <div>
//                 <HashRouter>
//                     <div className="main-app">
//                         <Route exact path="/browse" Component={Browse}></Route>   {/* Search Page */}
//                     </div>
//                 </HashRouter>
//             </div>
//         )
//       }
//     }
    
//     export default (App)


    // {           /*             <TopBar><Links /></TopBar>      */   } 
    // {/*   <Route exact path="/" render={ ()=> <Profiles /> }/>  {/* Landing Page */} */}
    // { /*}     <Route path="/movie" Component={MoviePage}></Route> {/* Movie Page */} */}
    // {/*    {/*  <Route path="/404" Component={NotFound}></Route>    {/* Error Page*/} */}