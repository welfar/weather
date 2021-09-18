import { useSelector } from "react-redux"

function CurrentDetails() {
  const { weather } = useSelector((state) => {
    return {
      weather: state.reducer.weather,
    }
  })

  return(
    weather !== null ?
      (
        <>        
          <div id="currentDetails-container-top">
            <div id="currentDetails">
              <div className="wind">
                <span className="label">Wind:</span>
                <span className="value">
                  <span>{weather.currently.windSpeed}</span>
                  <span>mph</span>
                </span>
              </div>
              <div className="humidity">
                <span className="label">Humidity:</span>
                <span className="value">
                  <span>{weather.currently.humidity}</span>
                  <span>%</span>
                </span>
              </div>
              <div className="dew-point">
                <span className="label">Dew Pt:</span>
                <span className="value">
                  <span>{weather.currently.dewPoint}</span>
                  <span>°</span>
                </span>
              </div>
              <div className="uv">
                <span className="label">UV Index:</span>
                <span className="value">
                  <span>{weather.currently.uvIndex}</span>
                </span>
              </div>
              <div className="visivility">
                <span className="label">Visibility:</span>
                <span className="value">
                  <span>{weather.currently.visibility}+</span>
                  <span> mi</span>
                </span>
              </div>
              <div className="pressure">
                <span className="label">Pressure:</span>
                <span className="value">
                  <span>{weather.currently.pressure}</span>
                  <span> mb</span>
                </span>
              </div>
            </div>
          </div>
          <div className="currentDetails-container-bottom">
            <span className="currentDetails-mostImportant-container"> 
              <img src={`${weather.currently.icon}.png`} alt="icon weather"/>
              <div>
                <div className="currentDetails-mostImportant-title">
                  <span>{weather.currently.temperature}°</span>
                  <span>{weather.currently.summary}</span>
                </div>
                <div className="currentDetails-mostImportant-subtitle">
                  <span><strong>Feels Like:</strong> {weather.currently.apparentTemperature}°</span>
                  <span><strong>Low:</strong> {weather.daily.data[0].temperatureLow}°</span>
                  <span><strong>Hight:</strong> {weather.daily.data[0].temperatureHigh}°</span>
                </div>
              </div>
            </span>
            <span className="currentDetails-next">{weather.hourly.summary}</span>
          </div>
        </>
      ) : ( null )
  )
}
export default CurrentDetails