import React from 'react';
import '../App.css'; // Import your CSS file
import Hero from '../components/home/Hero';
import History from '../components/home/History';
import EBTeam from '../components/home/EBTeam';
import Events from '../components/home/Events';


function Home() {
  return (
    <div>
      {/* <Header /> */}
        <Hero/>
        <History/>
        <EBTeam/>
        <Events/>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
