import React from 'react'

function Humidity({stats}) {
  return (
    <>
        <div className='bg-slate-600 p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'>
            <h2 className='text-sm mt-2 text-slate-300'>Humidity</h2>
                <div className="mt-2 text-slate-300">
                    {" "}
                    <span className="text-4xl font-bold">{stats.humid}</span>
                    <span className="text-2xl">%</span>
                </div>

                <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: `${stats.humid}%`}}></div>
                </div>
                
        </div>
   
    
    </>
    
  )
}

export default Humidity
