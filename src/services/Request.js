import axios from "axios"

export async function getWeatherInfo(LAT, LONG) {
  const LATLONG = `${LAT},${LONG}`
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_BASE_URL,
    url:`/${LATLONG}`,
  })
}
