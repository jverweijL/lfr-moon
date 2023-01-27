import React, { useEffect } from "react";
import axios from "axios";

import './App.css';
import './css/weather-icons.min.css';

const apikey="279d562f2dd347978b81ea324699cf9e";
const moonphase = ["wi-moon-new",
"wi-moon-waxing-crescent-1",
"wi-moon-waxing-crescent-2",
"wi-moon-waxing-crescent-3",
"wi-moon-waxing-crescent-4",
"wi-moon-waxing-crescent-5",
"wi-moon-waxing-crescent-6",
"wi-moon-first-quarter",
"wi-moon-waxing-gibbous-1",
"wi-moon-waxing-gibbous-2",
"wi-moon-waxing-gibbous-3",
"wi-moon-waxing-gibbous-4",
"wi-moon-waxing-gibbous-5",
"wi-moon-waxing-gibbous-6",
"wi-moon-full",
"wi-moon-waning-gibbous-1",
"wi-moon-waning-gibbous-2",
"wi-moon-waning-gibbous-3",
"wi-moon-waning-gibbous-4",
"wi-moon-waning-gibbous-5",
"wi-moon-waning-gibbous-6",
"wi-moon-third-quarter",
"wi-moon-waning-crescent-1",
"wi-moon-waning-crescent-2",
"wi-moon-waning-crescent-3",
"wi-moon-waning-crescent-4",
"wi-moon-waning-crescent-5",
"wi-moon-waning-crescent-6"];

function App() {
//          "https://api.ipgeolocation.io/astronomy?apiKey=API_KEY"
const [data, setData] = React.useState([]);


componentDidMount(props) {
  axios.get(`https://api.ipgeolocation.io/astronomy?apiKey='${apikey}`)
    .then(response => {
      const result = response.data;
      this.setState({ result });
      
      }
    )
  }
  return (
    <div className="App">
      <i className={'wi ' +  moonphase[Math.floor(data.moon_azimuth/12.85714286)]} title={'phase ' +  (Math.floor(data.moon_azimuth/12.85714286) + 1) + ' of 28'}></i>
    </div>
  );
}

export default App;
