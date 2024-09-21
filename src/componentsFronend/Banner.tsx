import React from 'react'
import Image from 'next/image'
import banner01 from '../assets/imagenes/banner01.jpg';

function Banner() {
  return (
    <div className='block py-2 px-2 rounded'>
        <Image src={banner01} alt='banner' className='w-full'/>
    </div>
  )
}

export default Banner