import React, { Component } from 'react';
import Card from './Card'
import User from './User'
import NewLat from './NewLat'
import Header from './Header'
import '../../sass/home.scss'

class Home extends Component {

  render() {
    return (
      <>

<Header/>
        <div className='home'>
          <div className="homeSection">
            <Card />
          </div>

          <div className="mainUserMap">
            <div className="userSection">
              <User />
            </div>
            <div className="mapSection">
              <NewLat />
            </div>
          </div>
        </div>
        {/* <div className="map">
          <div className="mapSection">
            <NewLat />
          </div>
        </div > */}
      </>
    );
  }
}

export default Home;

