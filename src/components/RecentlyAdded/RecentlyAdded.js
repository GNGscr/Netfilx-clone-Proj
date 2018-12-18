import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';

import { AppDiv, Hero } from './RecentlyAdded.styles';
import Slider from '../Slider/Slider';

class RecentlyAdded extends Component {
  state = {
    msg: "temp msg"
  }
  render() {
    return (
      <AppDiv>
      <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/eb6d0/6f8b62fa1a805b0bbea4c02170e9239e592eb6d0.webp" alt=""/>
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

export default RecentlyAdded;

