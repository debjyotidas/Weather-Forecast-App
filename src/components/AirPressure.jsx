import React from 'react'
import { Parallax } from 'react-next-parallax';


function AirPressure({stats}) {
    return (
        <>
            <Parallax offsetMultiplier={2} scale={1.2}>
            <div className='bg-slate-600 p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'>
                <h2 className='text-sm mt-2 text-slate-300'>Air Pressure</h2>
                    <div className="mt-2 text-slate-300">
                        {" "}
                        <span className="text-4xl font-bold">{stats.pressure}</span>
                        <span className="text-2xl">mb</span>
                    </div>       
            </div>
            </Parallax>
            
        </>
      )
}

export default AirPressure
