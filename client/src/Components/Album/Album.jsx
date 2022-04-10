import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup } from 'react-map-gl';
import { 
  AlbumInputWrapper, 
  AlbumWrapper, 
  RatingWrapper 
} from './Album.style';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';

const Album = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const [ longtitude, setLongtitude ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  
  const [ pins, setPins ] = useState([]);
  const [ currentPlacedId, setCurrentPlacedId ] = useState(null);
  const [ newPlace, setNewPlace ] = useState(null);

  const [ title, setTitle ] = useState('');
  const [ desc, setDesc ] = useState('');

  const [ stars, setStars ] = useState(0);

  const [ viewPort, setViewPort ] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });

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
        {pins.map((pin, index) => (
          <div key={index}>
            <Marker
              latitude={pin.latitude}
              longitude={pin.longitude}>
              <MdLocationPin/>
            </Marker>
            {pin._id === currentPlacedId && (
              <Popup>
              </Popup>
            )}
          </div>
        ))}
        {newPlace && (
          <div>
          </div>
        )}
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
      <AlbumInputWrapper>
        <form>
          <input type='text' id='placename' placeholder='PLACE'/>
          <input type='text' id='username' placeholder='NAME'/>
          <input type='text' id='title' placeholder='TITLE'/>
          <RatingWrapper>
            <div className='stars'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <label>Rating</label>
            <select id='rating'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </RatingWrapper>
          <input type='file' id='images' />
          <textarea id='desc' placeholder='MEMO'/>
          <button type='submit'>ADD</button>
        </form>
      </AlbumInputWrapper>
    </AlbumWrapper>
  )
}

export default Album