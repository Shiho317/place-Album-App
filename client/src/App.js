import React, { useEffect } from 'react';
import './App.css';

function App() {

  const AppID = process.env.REACT_APP_APP_ID;
  const ApiKey = process.env.REACT_APP_API_KEY;

  const getDatas = (url, method, body) => {

    const datas = fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "X-Application-Id": AppID,
        "X-Api-Key": ApiKey,
      },
      body: JSON.stringify(body),
    }).then(results => {
      return results.json()
    })
    return datas
  };

  const jsonDatas = {
    "locations": [
      {
        "id": "Home",
        "coords": {
          "lat": 51.5815890,
          "lng": -0.0775871
        }
      },
      {
        "id": "Office",
        "coords": {
          "lat": 51.511933,
          "lng": -0.1277888
        }
      }
    ],
    "arrival_searches": [
      {
        "id": "Morning Commute",
        "arrival_location_id": "Office",
        "departure_location_ids": ["Home"],
        "transportation": {
          "type": "driving"
        },
        "arrival_time": "2021-09-28T09:00:00Z",
        "properties": ["route"]
      }
    ]
  }

  const postLocation = async() => {
    try {
      const routes = await getDatas(
        'https://api.traveltimeapp.com/v4/routes',
        'POST',
        jsonDatas
      )
      console.log(routes)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    postLocation()
  },[jsonDatas])



  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
