import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import { AlbumInputWrapper, AlbumWrapper } from './Album.style';

const Album = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

  return (
    <AlbumWrapper>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
        }}
        style={{width: '70%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
      <AlbumInputWrapper>
        <form>
          <input type='text' id='username'/>
          <input type='text' id='title'/>
          <input type='text' id='desc'/>
          <input type='number' id='rating'/>
          <input type='text' id='images'/>
          <input type='number' id='long'/>
          <input type='number' id='lat'/>
          <button type='submit'>ADD</button>
        </form>
      </AlbumInputWrapper>
    </AlbumWrapper>
  )
}

export default Album