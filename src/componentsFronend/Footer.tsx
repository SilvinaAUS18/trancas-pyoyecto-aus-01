import React from 'react'
import  mapa1 from '../assets/imagenes/mapa1.png'; 
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
function Footer() {
  return (
    <div className='fex items-center justify-center  container mx-auto footerPrincipal'>
    <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-8'>
        <div className='card'>
            <div className='p-5 flex flex-col  mx-auto text-center'>
        
                <h5 className='lg:text-3xl md:text-2xl font-medium  text-center leading-10 '> INFORMACION </h5>
                <p className='text-white hover:text-xl text-lg  leading-10 mt-32 '> Direccion:  Hipólito Irigoyen 126</p>
              
                <p className='text-white hover:text-xl text-lg mt-6 leading-10'> VILLA DE TRANCAS ARGENTINA</p> 
                <p className='text-white hover:text-xl text-lg mt-6 leading-10'>  CP 4124 
                </p>
             </div>
         </div>

         <div className='card'>         
               <div className='p-5 flex flex-col my-auto'>
                 <div className=' rounded-xl overflow-hidden'>
                 </div>
                 <h5 className='lg:text-3xl md:text-2xl font-medium mt-3 text-center  '>CONTACTO</h5>
                    <p className='text-white hover:text-xl text-lg mt-14 flex leading-10'> <IoIosMail className='my-auto mx-4 w-10 h-8' />informaciontrancas@municipalidadtrancas.com</p>
                 <p className='text-white hover:text-xl text-lg mt-6 flex leading-10'><FaPhone className='my-auto mx-4 w-10 h-8' />(03862) 421126</p>
               </div>
               <div className=' rounded-xl overflow-hidden'>
                    <img src={mapa1.src} alt='noyicias' />
                </div>

               </div>
        <div className='card'>         
              <div className='p-5 flex flex-col'>
                <h5 className='lg:text-3xl md:text-2xl font-medium mt-3 text-center'> REDES SOCIALES </h5>
                <div className='mx-auto mt-32'>
                    <a href="https://www.facebook.com/search/top?q=municipalidad%20de%20trancas&locale=es_LA" target='blanck' className=' text-center  text-white py-2 rounded-lg font-semibold mt-4 hover:text-3xl focus:scale-95 transition-all duration-200 ease-out flex'><FaFacebookF className='my-auto mx-4 w-10 h-8' />Facebook</a>
                    <a href="https://www.instagram.com/municipiodetrancas/?hl=es-es"  target='blanck'className=' text-center  text-white py-2 rounded-lg font-semibold mt-4 hover:text-3xl focus:scale-95 transition-all duration-200 ease-out flex'> <GrInstagram  className='my-auto mx-4 w-10 h-8'/>Instagram</a>
                </div>
             </div>

        </div>

</div>


</div>

    
  )
}

export default Footer