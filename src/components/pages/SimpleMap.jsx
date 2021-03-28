import React, { Component } from 'react';
import {Map,  InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 


export class SimpleMap extends Component {
    render() {
        const style = {
      borderRadius:'25px',
            }
          

          const containerStyle = {
            width: '30%',
            height: '50%',
            marginLeft:'270px',
      borderRadius:'25px'
          }
        return (
    //   <Map google={this.props.google} zoom={14}>
 <div className="MapContainer" >

 
    <Map
    google={this.props.google}
    containerStyle={containerStyle}
    style={style}
    initialCenter={{
      lat: this.props.latitude,
      lng: this.props.longitude
    }}
    zoom={15}
    onClick={this.onMapClicked}
  >
 
        <Marker onClick={this.onMarkerClick}
      
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBH6v9WX9hI-waEYc6vS7MsRyZZFgEkAqw')
})(SimpleMap)