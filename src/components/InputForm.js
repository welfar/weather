import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Select from "react-select"
import { getWeather } from "../store/reducer"
import cities from "../assets/data/Cities"
import { options } from "../assets/data/ListOptions"

function InputForm() {
  const dispatch = useDispatch()
  const [city, setCity] = useState("")

  const handleAssign = (e) => {
    setCity(e.label)
    const location = cities(e.value)
    const LAT = location.LAT
    const LONG = location.LONG
    dispatch (getWeather(LAT, LONG))
  }

  return(
    <form className="inputForm">
      <Select 
        options={options}
        className="city-input"
        onChange={(e) => handleAssign(e)}
      />
    </form>
  )
}
export default InputForm