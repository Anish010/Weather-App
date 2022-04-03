import React, { useState, useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset


    } = tempInfo;

      let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    
    useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
    }, [weatherMood]);
    
  return (
      <>
          <div className="widget">
              <div className="weatherIcon">
                  <i className={"wi wi-day-sunny"}></i>
              </div>
              <div className="weatherInfo">
                  <div className="temperature">
                      <span>{temp}&deg;</span>
                  </div>
                  <div className="description">
                      <div className="weatherCondition">
                          {weatherMood}
                      </div>
                      <div className="place">{name},{country}</div>
                  </div>
              </div>
              <div className="date">Computer Time <br/><br/>{new Date().toLocaleString()}</div>
              
              <div className="extra-temp">
                  <div className="temp-info-minmax">
                      <div className="two-sided-section">
                          <p>
                              <i className={`wi ${weatherState}`}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {timeStr} P.M.<br/>
                              Sunset
                          </p>
                      </div>
                      <div className="two-sided-section">
                          <p>
                              <i className={`wi ${weatherState}`}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {humidity}<br />
                             Humidity
                          </p>
                      </div>
                  </div>
                  
                  <div className="weather-extra-info">
                      
                       <div className="two-sided-section">
                          <p>
                              <i className={`wi ${weatherState}`}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {pressure}<br />
                              Pressure
                          </p>
                      </div>
                       <div className="two-sided-section">
                          <p>
                              <i className={`wi ${weatherState}`}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {speed}<br/>Speed<br />
                          </p>
                      </div>
                      
                  </div>
                  
              </div>
          </div>
      </>
  )
}

export default WeatherCard