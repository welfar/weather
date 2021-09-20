import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import sunrise from "../assets/images/sunrise.png";
import sunset from "../assets/images/sunset.png";
import { Accordion }  from "react-bootstrap"

function WeeklyTable() {
	const { weather } = useSelector((state) => {
		return {
			weather: state.reducer.weather,
		};
	});

	return weather !== null ? (
		<>				
      <Accordion defaultActiveKey="0" className="container-week">
        {weather.daily.data.map((day) => {
          return (
            <Accordion.Item key={day.time} eventKey={day.time}>
              <Accordion.Header>
                <div className="daily-header">
                  <img src={`${day.icon}.png`} alt="icono clima del día"/>
                  <p>{moment(day.time * 1000).format("dddd")}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              <div className="week">
                <div className="day">
                  <div className="info-container">
                    <div className="info-extra">
                      <div className="minTemp">
                        <strong>Low:</strong> {day.temperatureLow}° {moment(day.temperatureLowTime).format("LT")}
                      </div>
                      <div className="maxTemp">
                        <strong>Hight:</strong> {day.temperatureHigh}° {moment(day.temperatureHighTime).format("LT")}
                      </div>
                      <div className="sunrise">
                        <img src={sunrise} alt="icon weather" />
                        {moment(day.sunriseTime).format("LT")}
                      </div>
                      <div className="sunset">
                        <img src={sunset} alt="icon weather" />
                        {moment(day.sunsetTime).format("LT")}
                      </div>
                    </div>
                    <div className="summary-daily">{day.summary}</div>
                    <div className="dailyDetails">
                      <div className="wind">
                        <span className="label">Wind:</span>
                        <span className="value">
                          <span>{day.windSpeed}</span>
                          <span>mph</span>
                        </span>
                      </div>
                      <div className="humidity">
                        <span className="label">Humidity:</span>
                        <span className="value">
                          <span>{day.humidity}</span>
                          <span>%</span>
                        </span>
                      </div>
                      <div className="dew-point">
                        <span className="label">Dew Pt:</span>
                        <span className="value">
                          <span>{day.dewPoint}</span>
                          <span>°</span>
                        </span>
                      </div>
                      <div className="uv">
                        <span className="label">UV Index:</span>
                        <span className="value">
                          <span>{day.uvIndex}</span>
                        </span>
                      </div>
                      <div className="visivility">
                        <span className="label">Visibility:</span>
                        <span className="value">
                          <span>{day.visibility}+</span>
                          <span> mi</span>
                        </span>
                      </div>
                      <div className="pressure">
                        <span className="label">Pressure:</span>
                        <span className="value">
                          <span>{day.pressure}</span>
                          <span> mb</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
		</>
	) : null;
}
export default WeeklyTable;
