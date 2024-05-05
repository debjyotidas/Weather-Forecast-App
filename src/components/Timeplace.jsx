import React from 'react'

function Timeplace({stats}) {
  return (
    <>
        <div className='flex justify-center items-center cursor-pointer text-slate-400 mt-4 text-[15px] text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out'>
        Today &#183; {stats.time} | {stats.region}
        </div>
    </>
  )
}

export default Timeplace