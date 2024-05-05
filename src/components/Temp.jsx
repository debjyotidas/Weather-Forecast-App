import React from 'react'

function Temp({stats}) {
    if (!stats || !stats.temp) {
        // If stats or stats.temp is null or undefined, return null
        return null;
    }

    return (
        <div className='flex justify-center cursor-pointer items-center text-slate-200 mt-8 text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out'>
            <p className='font-semibold text-[55px]'>
                {stats.temp}
            </p>
            <span className='text-[33px]'>°C</span>
        </div>
    );
}

export default Temp