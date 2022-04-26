import React, { useContext, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup } from 'react-map-gl';
import { 
  AlbumInputWrapper, 
  AlbumWrapper, 
  Card, 
  RatingWrapper 
} from './Album.style';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { IoMdStar } from 'react-icons/io';
import axios from 'axios';
import { AppContext } from '../../App';
import FileBase64 from 'react-file-base64';

const Album = () => {

  const { currentName, setLoggedIn } = useContext(AppContext);

  const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  const today = `${year}-${('000'+ month).slice(-2)}-${('000' + day).slice(-2)}`;

  const [ longitude, setLongitude ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  
  const [ pins, setPins ] = useState([]);
  const [ currentPlacedId, setCurrentPlacedId ] = useState(null);

  const [ title, setTitle ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ albumImage, setAlbumImage ] = useState('');
  const [ stars, setStars ] = useState(0);
  const [ date, setDate ] = useState(today);

  const [ viewPort, setViewPort ] = useState({
    latitude: 49.246292,
    longitude: -123.116226,
    zoom: 4,
  });

  const [ isAddress, setIsAdress ] = useState('')

  const url = 'http://api.positionstack.com/v1/forward';

  const params = {
    access_key: process.env.REACT_APP_GEOCODE_KEY,
    query: isAddress,
    limit: 1
  }

  const getGeoCode = () => {
    axios.get(url, {params})
    .then(res => {
      const data = res.data.data[0];
      console.log(data.latitude);
      console.log(data.longitude);
      setLongitude(data.longitude)
      setLatitude(data.latitude)
    }).catch(error => {
      console.log(error)
    });
  };

  const handleMakerClick = (id, lat, long) => {
    setCurrentPlacedId(id);
    setViewPort({...viewPort, latitude: lat, longitude: long})
  }

  const albumSubmit = async(e) => {
    e.preventDefault();
    const newPin = {
      username: currentName,
      title,
      desc,
      rating: stars,
      images: albumImage,
      long: longitude,
      lat: latitude,
      date
    };

    try {
      const res = await axios.post("/api/pins", newPin);
      setPins([...pins, res.data]);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const getPins = async() => {
      try {
        const allPins = await axios.get("/api/pins")
        setPins(allPins.data);
      } catch (error) {
        console.log(error)
      }
    };
    getPins();
    setLoggedIn(true)
  },[setLoggedIn])

  return (
    <AlbumWrapper>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
        ...viewPort
        }}
        style={{width: '70%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pins.map((pin, index) => (
          <div key={index}>
            <Marker
              latitude={pin.lat}
              longitude={pin.long}
              offsetLeft={-3.5 * viewPort.zoom}
              offsetTop={-7 * viewPort.zoom}>
              <MdLocationPin 
                style={{fontSize: '2rem', color: 'red'}}
                onClick={() => handleMakerClick(pin._id, pin.lat, pin.long)}/>
            </Marker>
            {pin._id === currentPlacedId && (
              <Popup
                key={pin._id}
                latitude={pin.lat}
                longitude={pin.long}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlacedId(null)}>
                <Card>
                  <div className='album-image'>
                    <img src={pin.images} alt='album-img'/>
                  </div>
                  <label>Place</label>
                  <h3>{pin.title}</h3>
                  <label>Review</label>
                  <div>
                    {Array(pin.rating).fill(<IoMdStar/>)}
                  </div>
                  <label>Memo</label>
                  <h4>{pin.desc}</h4>
                  <div>Date: {pin.date}</div>
                </Card>
              </Popup>
            )}
          </div>
        ))}
      </Map>
      <AlbumInputWrapper>
        <h1>{currentName}'s album</h1>
        <form onSubmit={albumSubmit}>
          <input type='text' id='placename' name='placename' placeholder='PLACE' onChange={(e) => setIsAdress(e.target.value)}/>
          <input type='text' id='title' name='title' placeholder='TITLE' onChange={(e) => setTitle(e.target.value)}/>
          <RatingWrapper>
            <div className='stars'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <label>Rating</label>
            <select id='rating' name='rating' onChange={(e) => setStars(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </RatingWrapper>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setAlbumImage(base64)}
          />
          <textarea id='desc' placeholder='MEMO' onChange={(e) => setDesc(e.target.value)}/>
          <input type='date' id='date' name='date' value={date} onChange={(e) => setDate(e.target.value)}/>
          <button type='submit' onClick={getGeoCode}>ADD</button>
        </form>
      </AlbumInputWrapper>
    </AlbumWrapper>
  )
}

export default Album