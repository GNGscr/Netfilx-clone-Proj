import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import Slider from '../Slider/Slider';
import Footer from '../Global/Footer';
import { AppDiv, Hero, SliderSection, FooterSection } from './SearchPage.styles';




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
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/97e73/577e0a36fa77f3f032e4538e859c90267ab97e73.webp" alt=""></Hero>
          <LogoAndText />
            <SliderSection>
              <Slider/>
              <Slider/>
              <Slider/>
              <Slider/>
              <Slider/>
            </SliderSection>
            <FooterSection>
              <Footer />
            </FooterSection>
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