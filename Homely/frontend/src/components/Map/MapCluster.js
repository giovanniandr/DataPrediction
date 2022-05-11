import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import useSwr from "swr";
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvdmFubmlhbmRyIiwiYSI6ImNsMWtucG02ZDAyNTIzaW8zeWg1aG5qbmwifQ.yOWlVopRvptHXp4Kp-3v4A'

 function Data(){
  const fetcher = (...args) => fetch(...args).then(response => response.json());
  const url = "https://8000-giovanniand-datapredict-052uxmkfwlh.ws-eu44.gitpod.io/address";
  const { data, error } = useSwr(url, fetcher);
}

class MapCluster extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -6.254,
      lat: 53.346,
      zoom: 12,
    };
      this.mapContainer = React.createRef();
    }

    componentDidMount() {

      const { lng, lat, zoom } = this.state;
      const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/giovanniandr/cl2gbpvbt003214kskxixuz4y',
            center: [lng, lat],
            zoom: zoom,
            tileSize: 512,
            zoomControl:false, 
            attributionControl:false,
            //Bbox parament limits results to only Dublin using min and max lati and long
            bbox: [-6.543618876090989, 53.222563956123736, -6.029960581107389, 53.63696060258761]
      });
      }

  render () {
      return (
        <div>
        <div ref={this.mapContainer} className="map" />
        </div>
      );
  }
}

export default MapCluster
