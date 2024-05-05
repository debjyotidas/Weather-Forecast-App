import './App.css';
import Temperature from './components/Temperature';
import Highlights from './components/Highlights';
import { useEffect, useState } from 'react';


function App() {
  const[city,Setcity]=useState("New Delhi")
  const[weatherData,SetweatherData] = useState(null)
  const ApiUrl = `https://api.weatherapi.com/v1/current.json?key=86b68013be994d4fbde141139240205&q=${city}&aqi=yes`;
  
  useEffect(()=>{
    fetch(ApiUrl)
    .then((response)=>{
      if(!response.ok){
        throw new Error('Error')
      }
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      SetweatherData(data)

    })
    .catch((e)=>{
      console.log(e)
    })
  },[city])
  
  return (
    <div className='bg-[#1F213A] h-screen flex justify-center align-top'>
        <div className='mt-36 h-1/3 w-1/5'>
          {/* Add a conditional check for weatherData */}
      {weatherData && (
        <Temperature
          setCity={Setcity}
          stats={{
            temp: weatherData.current.temp_c,
            condition: weatherData.current.condition.text,
            isDay: weatherData.current.is_day,
            location: weatherData.location.name,
            time: weatherData.location.localtime,
            region:weatherData.location.region,
            image: weatherData.current.condition.icon
          }}
        />
      )}
        </div>
        <div className=' mt-36 h-1/3 w-1/3 p-10 grid grid-cols-2 gap-6'>
          <h2 className='text-slate-300 text-2xl col-span-2'>Today's Highlights</h2>
          
          {weatherData && (
            <>
              <Highlights
                stats={
                {
                  title:"Wind Status",
                  value: weatherData.current.wind_mph,
                  unit:"mph",
                  direction:weatherData.current.wind_dir,
                  humid: weatherData.current.humidity,
                  pressure:weatherData.current.pressure_mb,
                  Visibility:weatherData.current.vis_miles
                }   
                }
              />
            </>
          
          )}
        </div>
    </div>
  );
}

export default App;
