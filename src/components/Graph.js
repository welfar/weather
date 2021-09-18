import { useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import moment from "moment"
import { react } from "@babel/types"

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
  
  console.log(nextHours)


  return (
    weather !== null &&
    (
      <>
        <div className="line-time">
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


// console.log(summaries)
//  return (
//   <>
//   <table class="table table-borderless">
//       <tr>
//       {summaries.map(range => <td width={`${(range.hours/49)*100}%`} className={range.summary.toLowerCase.replaceAll(" ", "-")}>{range.summary}</td>)}
//         <th>Week</th>
//       </tr>
//     {/* <tbody>{locations.map( location => 
//       <tr><td>{location}</td></tr>
//       )}</tbody> */}
//   </table>
// </>
// // En React
//  )
// }

export default Graph










