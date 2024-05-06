import React from 'react'

function Visibility({stats}) {
  return (
    <>
        <div className='bg-slate-600 p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'>
            <h2 className='text-sm mt-2 text-slate-300'>Visibility</h2>
                <div className="mt-2 text-slate-300">
                    {" "}
                    <span className="text-4xl font-bold">{stats.Visibility}</span>
                    <span className="text-2xl">miles</span>
                </div>

        </div> 
    </>
  )
}

export default Visibility
