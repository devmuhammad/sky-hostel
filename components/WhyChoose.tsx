import React from 'react'
import { FaTag } from 'react-icons/fa';
import { MdFiberNew, MdOutlineCleanHands } from 'react-icons/md';

const WhyChoose = () => {
  return (
    <div className="container-cont bg-[#7dc243] rounded-xl p-4 grid grid-cols-4 gap-8">
      <p className='text-2xl font-semibold text-white text-center self-center'>Why Choose SKY</p>
      <div className="flex-align bg-blue-700 rounded-xl px-4 py-6 gap-3">
        <MdOutlineCleanHands className="text-white text-5xl" />
        <p className='text-white text-center'>Clean and Conducive Environment</p>
      </div>
      <div className="flex-align bg-blue-700 rounded-xl px-4 py-6 gap-3">
        <FaTag className="text-white text-4xl" />
        <p className='text-white text-center'>Save more with low prices</p>
      </div>
      <div className="flex-align bg-blue-700 rounded-xl px-4 py-6 gap-2">
        <MdFiberNew className="text-white text-4xl" />
        <p className='text-white text-center'>New and improved facilities</p>
      </div>
    </div>
  )
}

export default WhyChoose;
