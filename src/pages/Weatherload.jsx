import React from 'react'
import '../styles/weatherload.css'
import { FaLocationDot } from "react-icons/fa6";

const Weatherload = () => {
  return (
    <div className='wrap1'>
        <h1>Weather Forecast Result</h1>
        <div className='innerwrapload'>
            <div className='locationname'>
            <FaLocationDot />
            <h2>Lagos,Nigeria</h2>
            </div>
            <h1>{`19°C`}</h1>

            <div className='sunny'>
                <h2>Sunny</h2>
                <img src="src/assets/sunny.png" alt="" />
            </div>
            <div className='windspeed'>
                <h2>Wind Speed:3km/h</h2>
            </div>
        </div>
    </div>
  )
}

export default Weatherload