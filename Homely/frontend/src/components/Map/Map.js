import React, {Component} from 'react';
import ReactMapboxGl from 'react-map-gl';
import {ReactMapboxGlCluster} from 'react-mapbox-gl-cluster';
import './Map.css';

//API with data.
const url = "https://8000-giovanniand-datapredict-052uxmkfwlh.ws-eu44.gitpod.io/address";

const Maps = ReactMapboxGl({
    accessToken: process.env.MAPBOX_GL_TOKEN,
  });
  
  const mapProps = {
    center: [-95.7129, 37.0902],
    zoom: [3],
    style: 'mapbox://styles/mapbox/streets-v8',
  };
  

class Map extends Component {
    getEventHandlers() {
        return {
          onClick: (properties, coords, offset) =>
            console.log(`Receive event onClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
          onMouseEnter: (properties, coords, offset) =>
            console.log(`Receive event onMouseEnter at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
          onMouseLeave: (properties, coords, offset) =>
            console.log(`Receive event onMouseLeave at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
          onClusterClick: (properties, coords, offset) =>
            console.log(`Receive event onClusterClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
        };
      }
    
      render() {
        return (
          <div className="map">
            <Maps {...mapProps} onStyleLoad={this.onStyleLoad}>
              <ReactMapboxGlCluster data={url} {...this.getEventHandlers()} />
            </Maps>
          </div>
        );
      }
    }

export default Map


