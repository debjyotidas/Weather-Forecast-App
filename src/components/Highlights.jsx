import React from 'react'
import Humidity from './Humidity'
import Visibility from './Visibility'
import AirPressure from './AirPressure'
import { Parallax } from 'react-next-parallax';


function Highlights({stats}) {
  return (
    <>
    <Parallax offsetMultiplier={2} scale={1.2}>
    <div className='bg-slate-600 p-2 cursor-pointer flex flex-col justify-start items-center text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out'>
        <h2 className='text-sm mt-2 text-slate-300'>Wind Status</h2>
            <div className="mt-2 text-slate-300">
                {" "}
                <span className="text-4xl font-bold">{stats.value}</span>
                <span className="text-2xl">{stats.unit}</span>
            </div>
            {stats.direction?
                (<div className="flex mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-200"
                >
                
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
                </svg>
                <div className="text-slate-200 ms-2">{stats.direction}</div>
            </div>)
            :null}
    </div>
    </Parallax>
        
            <Humidity stats={stats}/>
            <Visibility stats={stats}/>
            <AirPressure stats={stats}/>
    </>
    
    
  )
}

export default Highlights
