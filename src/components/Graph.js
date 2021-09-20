import React from "react"
import { useSelector } from "react-redux"
import moment from "moment"

function Graph() {

  const { weather, resumeWeather } = useSelector((state) => {
    return {
      weather: state.reducer.weather,
      resumeWeather: state.reducer.resumeWeather,
    }
    
  })

  if(weather !== null){
    const arrayHourly = weather?.hourly?.data
    var nextHours = []
    for(let i=0; i < arrayHourly.length; i++){
      if(i===0 || i%2 ===0) {
        nextHours.push(arrayHourly[i])
      }
    }
  }

  return (
    weather !== null &&
    (
      <>
        <div className="timeline">
          <div className="container-nextHours">
            <div className="container-summary">
              {resumeWeather !== null && resumeWeather.map(range => {
                const nameSummaryClass = range.summary.toLowerCase().replaceAll(" ", "-")
                return(
                  <span 
                    width={`${(range.hours/49)*100}%`} 
                    className={nameSummaryClass}
                  >
                    {range.summary}
                  </span>
                )
              })}
            </div>
            <div className="container-hours">
              {nextHours !== null && nextHours.map((hour, index) => {
                return(
                  <React.Fragment key={index}>     
                    { index !== 0 &&<div className="separator-hours"></div>}             
                    <div className="hours-item">
                      <div className="position-hour"></div>
                      <span className="hours-item-hour">
                        { index === 0 ? "Now" : moment(hour.time * 1000).format('LT').replace(":00", "")}
                      </span>
                      <span className="hours-item-temperature">{hour.temperature}°</span>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Graph
