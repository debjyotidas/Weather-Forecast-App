import React from 'react'

function Climate({stats}) {
    return (
      <>
        <div className='flex justify-center items-center text-slate-300 mt-8 text-[25px] text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'>
           {stats.condition}
        
            {stats.image && ( // Conditional rendering to ensure image is available
                <div className="ml-2"> {/* Add margin to create space between condition and image */}
                    <img src={stats.image} alt="Weather Icon" className="w-8 h-8" /> {/* Adjust width and height as needed */}
                </div>
            )}
        </div>
      </>
        
      )
}

export default Climate