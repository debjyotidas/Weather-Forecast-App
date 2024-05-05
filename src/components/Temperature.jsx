import React from 'react'
import { TextField } from "@mui/material";
import SunMoon from './SunMoon';
import Temp from './Temp';
import Climate from './Climate';
import Timeplace from './Timeplace';

function Temperature({setCity,stats}) {
    const handleCityChange=(e)=>{
        setCity(e.target.value)
    }
  return (
    <>
        <div className="flex">
            <TextField
                    className='bg-slate-500 border border-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400 text-slate-300'
                    label={<label className="text-slate-300 text-md font-bold">Enter your City</label>}
                    onChange={handleCityChange}
                    defaultValue="New Delhi"
                    InputProps={{ // Adding InputProps to customize input style
                        style: { color: '#cfcecc', fontWeight: 'bold' } // Customize color and font weight
                    }}
            />
            <div className='mt-4 ml-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            </div>
        </div>
        <SunMoon stats={stats}/>
        <Temp stats={stats}/>
        <Climate stats={stats}/>
        <Timeplace stats={stats}/>
    </>
  )
}

export default Temperature