import { getWeatherInfo } from "../services/Request"
import { climatedifferentiator } from "../assets/data/Climatedifferentiator"

export const GET_WEATHER = "GET_WEATHER"
export const ASSIGN_LAT = "ASSIGN_LAT"
export const ASSIGN_LONG = "ASSIGN_LONG"
export const SUMMARIES = "SUMMARIES"

export function getWeather(LAT, LONG) {
  return async function (dispatch) {
    try {
      const { data } = await getWeatherInfo(LAT, LONG)
      dispatch({
        type: GET_WEATHER,
        payload: data,
      })
      dispatch({
        type: SUMMARIES,
        payload: climatedifferentiator(data.hourly.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function assignLat(LAT) {
  return function (dispatch) {
    dispatch({
      type:ASSIGN_LAT,
      payload:LAT,
    })
  }
}

export function assignLong(LONG) {
  return function (dispatch) {
    dispatch({
      type:ASSIGN_LONG,
      payload:LONG,
    })
  }
}

const initialState = {
  weather: null,
  LAT: "",
  LONG: "",
  resumeWeather: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:{
      return {
        ...state,
        weather: action.payload,
      }
    }
    case ASSIGN_LAT:{
      return {
        ...state,
        LAT: action.payload,
      }
    }
    case ASSIGN_LONG: {
      return {
        ...state,
        LONG: action.payload,
      }
    }
    case SUMMARIES: {
      return {
        ...state,
        resumeWeather: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer