import React, { useState } from 'react'
import '../styles/weather.css'
import { useNavigate } from 'react-router';
import { HashLoader } from 'react-spinners';



const Weather = () => {
    const [loading,setLoading] = useState(false);

    const nav = useNavigate()

const fetchWeather = () =>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
        nav('/weatherload')
    },2500)

}

  return (
    <div className='wrap'>
        {
            loading && (
                <div className='render'><HashLoader size={80} loading={loading} /></div>
            )
        }
        <div className='innerwrap'>
            <h1>What is the weather forecast in your City?</h1>
            <div className='inputhold'>
            <input type="text"
             placeholder='Search your City...' className='input'/>

             <button onClick={fetchWeather}>Search</button>
            </div>
            
        </div>
    </div>
  )
}

export default Weather