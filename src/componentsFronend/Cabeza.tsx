import React from 'react'
import escudo from '../assets/imagenes/logoMunicipio.jpg'
import bandera from '../assets/imagenes/bandera.png';
import Image from 'next/image';


function Cabeza() {
  return (
    <div className="flex container mx-auto my-auto contenedorCabeza rounded size-full ">

            <div className=' lg:pl-2  lg:size-1/12 md:size-2/12 md:px-8 sm:size:2/12  '>
                <Image src={escudo} alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                className='rounded-full 
                my-2
                lg:min-h-32 
                lg:min-w-32  
                md:max-h-14 md:max-w-14 
                sm:max-h-14 
                sm:max-w-14
                sm:ml-4

                 overflow-auto   '/>
            </div>
            <div className='lg:size-8/12 md:size-10/12 sm:size-10/12 mx-auto my-auto  w-100 '>
              <h1 
                    className='justify-center justify-items-center  
                    lg:font-bold
                    lg:text-[2.9rem]
                    lg:ml-10
                    md:text-2xl md:text-center md:justify-items-center 
                    sm:text-xl sm:text-center sm:justify-items-center '
                    >MUNICIPALIDAD DE TRANCAS
                    </h1>
            </div>
            <div className=' lg:size-2/12     md:size-2/12  sm:size-2/12 ' >
                 <Image src={bandera} alt="Image" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 className=' overflow-auto
                 my-2
                 mr-2
                 
                 lg:w-36 
                 lg:h-28
                 md:max-h-28 
                 md:max-w-36
                 sm:max-h-8 
                 sm:max-w-12
                 sm:mt-4
                 sm:mr-4

                 ' />
            </div>
    </div>

      )
}

export default Cabeza