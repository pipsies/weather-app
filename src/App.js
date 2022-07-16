import { useEffect, useState } from 'react';
import './Sass/App.scss';
import axios from 'axios';
import LineChart from './components/LineChart';
import {weatherData} from './data';
import { Line } from 'react-chartjs-2';
import { Color } from 'three';
import { without } from 'lodash';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
</style>




const App = () => {

  const [data, setData] = useState({})
 
   const url = ("https://api.openweathermap.org/data/2.5/onecall?lat=51.5046&lon=-0.1070&exclude=hourly,minutely,alerts&units=metric&appid=9eacbcbd14d701cbb80b32e45434bec1")

  
    //fetching api url

    useEffect(() => {
      axios.get(url).then((response) => {
        setData(response.data)
          console.log(response.data)
          
        
        // setting local full time/UTC & date
        const date = new Date();
        document.getElementById("date-time").innerHTML = date;
        
        //mini date
        const smalldate = new Date();
        let getsmalldate = smalldate.toDateString();
        document.getElementById("mini-date").innerHTML = getsmalldate;      
      
    })
    }, []);
    


// data for graph
const [WeatherData, setWeatherData] = useState({
  labels: weatherData.map((data) => data.day), 
  datasets: [{
    label: ["Daily Temperature"],
    data: weatherData.map((data) => data.weather),
    backgroundColor: ["white"],
    borderColor: ["#ffffff4d"],
    borderJoinStyle: ["bevel"],
    tension: ["0.4"]
 
  }]
})


// data for graph
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
        suggestedMin: 50,
        suggestedMax: 38, 
    }, 
}
};




  return (
  <div>

<div className='left-info'>

          <div className='IMN'>
          <h1 className='IMN-header'> IMN 
          <img className='imn-icon' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-open-menu-essentials-tanah-basah-basic-outline-tanah-basah.png"/></h1>
          </div>
          
       <div className='location-info'> 
      <div className='first-data-temp'>
    
       { data.current ? <h1 
       id='current-temp'>{data.current.temp.toFixed()}&#8451;</h1>
        : null }
       </div>
       
    
       <p className='current-city'>London</p>
       <p className='country'>United Kingdom, {data.timezone}</p>
       <p id='date-time'></p>
       <img id='dashed-line' src="https://img.icons8.com/ios-glyphs/90/FFFFFF/dashed-line.png"/>
       
       </div>


</div>


            <div className='weather-info'>

            <div className='week-forecast-header'>
              <p className='weather-title'>7 Day Regional Weather Forecast</p>
              <p id='mini-date'></p>
              </div>

              <div className='buttons'>
                <p id='temp-btn'>Temperature</p>
                <p>Percipitation</p>
                <p className='wind'>Wind</p>
              </div>
            

              <div className='graph'>
                <h1 className='city-name'>Soho
                <img className='burger-icon' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-open-menu-essentials-tanah-basah-basic-outline-tanah-basah.png"/></h1>
                {data.current ?<p className='current-temp'>{data.current.temp.toFixed()}&#8451;</p> :null}
                <LineChart chartdata={WeatherData} options={options}/>
              </div>



              <div className='seven-forecast'>
                <ul>
                   <li id='day'><p>Fri</p>
                     <img id='img1' src='http://openweathermap.org/img/wn/04d@2x.png' width="50" height="50" ></img>
                     {data.daily ? <p id='day-temp'>{data.daily[1].temp.min.toFixed()} - {data.daily[1].temp.max.toFixed()} &#8451;</p> :null}
                    </li> 

                  <li id='day'><p>Sat</p>
                  <img id='img2'  src='http://openweathermap.org/img/wn/04d@2x.png' width="50" height="50" ></img>
                  { data.daily ? <p id='day-temp'>{data.daily[2].temp.min.toFixed()} - {data.daily[2].temp.max.toFixed()}&#8451;</p> : null}
                  </li>

                  <li id='day'><p>Sun</p>
                    <img id='img3' src='http://openweathermap.org/img/wn/04d@2x.png' width="50" height="50" ></img>
                    {data.daily ? <p id='day-temp'>{data.daily[3].temp.min.toFixed()} - {data.daily[3].temp.max.toFixed()}&#8451;</p> :null}
                    </li>

                  <li id='day'><p>Mon</p>
                    <img id='img4' src='http://openweathermap.org/img/wn/03d@2x.png' width="50" height="50" ></img>
                    {data.daily ? <p id='day-temp'>{data.daily[4].temp.min.toFixed()} - {data.daily[4].temp.max.toFixed()}&#8451;</p>:null}
                    </li> 

                  <li id='day'><p>Tue</p>
                    <img id='img5' src='http://openweathermap.org/img/wn/10d@2x.png' width="50" height="50" ></img>
                    {data.daily ? <p id='day-temp'>{data.daily[5].temp.min.toFixed()} - {data.daily[5].temp.max.toFixed()}&#8451;</p>:null}
                    </li>

                  <li id='day'><p>Wed</p>
                    <img id='img6' src='http://openweathermap.org/img/wn/02d@2x.png' width="50" height="50" ></img>
                    {data.daily ? <p id='day-temp'>{data.daily[6].temp.min.toFixed()} - {data.daily[6].temp.max.toFixed()}&#8451;</p>:null}
                    </li>

                  <li id='day'><p>Thu</p>
                  <img id='img7' src='http://openweathermap.org/img/wn/03d@2x.png' width="50" height="50" ></img>
                  {data.daily ? <p id='day-temp'>{data.daily[7].temp.min.toFixed()} - {data.daily[7].temp.max.toFixed()}&#8451;</p>:null}
                    </li>
                </ul>

                <div className='arrow-buttons'>


                    <button className='nz'>
                    <img className='left-arrow' src="https://img.icons8.com/fluency-systems-regular/24/ecf0f1/long-arrow-left.png"/>
                    <p className='p-east'>East London</p>
                    </button>



                    <button className='nl'> 
                    <p className='p-north'>North London </p>
                    <img   className='right-arrow' src="https://img.icons8.com/fluency-systems-regular/24/ecf0f1/long-arrow-right.png"/>


                    </button>

                    </div>
                
              </div>

        

            </div>
    

      </div>
  )

  
}

export default App;

