import React from 'react'

const SubHeader = ({img,text}) => {
  return (
    <div>
        <div className="relative bg-custom h-72 w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-customBlue opacity-100"></div>
          <div className='absolute mx-16 md:mx-28 text-white font-bold text-5xl md:text-6xl text-center top-[40%]' data-aos="fade-up">{text}</div>
          <div className="flex justify-center items-center h-full w-full">
            <img
              src={img}
              alt="contact"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
    </div>
  )
}

export default SubHeader
