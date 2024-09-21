import React from 'react'
import produccion05 from '@/assets/imagenes/produccion05.jpg'
import produccion04 from '@/assets/imagenes/produccion04.jpeg'
import produccion03 from '@/assets/imagenes/producion01.jpeg'


const Produccion = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex items-center justify-center h-auto container mx-auto  ">
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200">
          <div className=" flex flex-col rounded-lg overflow-hidden mx-auto mt-5 ">
          <div>
          <img src={produccion04.src} width={600}alt="intendente"  className="mt-5 mb-2 rounded-xl"/>
          </div>
          </div>
           <div className=" mx-auto ">

          <h1 className=" text-justify text-2xl font-bold mt-10 text-blue-800   my-auto p-5 "> El Departamento Trancas tiene como principal actividad económica la ganadería orientada a la producción lechera</h1> 
          <h1 className=" text-justify text-xl font-bold mt-2 text-blue-800  my-auto p-5"> El cultivo de forrajes y la producción de hortalizas y granos.</h1>
          </div>   
        <p className=" text-slate-700 text-lg mt-6 indent-12 text-justify mx-auto my-auto p-6 "> 
        Es una zona Apta para ganadería, sobre todo caprina, ovina y bovina y se observan cultivos hortícolas y frutales en los lugares donde la agroecología lo permite. Se destacan las artesanías en lana y cueros y se avanzan en proyectos de turismo rural comunitario.
        </p>
        <div className='mx-auto m-3'>
        <img src={produccion05.src} width={500}alt="intendente" className="mt-2 rounded-xl" />

        </div>

        </div>
        </div>

        

        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200">
          <div className=" flex flex-col rounded-lg overflow-hidden mx-auto mt-5 ">
          
          <div className='visible '>
          <img src={produccion03.src} width={600} alt="intendente"  className="mt-10 mb-5 rounded-xl "/>
          </div>
          </div>
           <div className=" mx-auto ">

          <h1 className=" text-center text-2xl font-bold mt-2 text-blue-800 "> Producción lechera.</h1>
           
        <p className=" text-slate-700 text-lg mt-3 indent-12 text-justify mx-auto p-6 "> 
        Existen 47 tambos y representan la mayor cuenca láctea extrapampeana produciendo 80.000 litros de leche por día
        Hay emplazadas 6 industrias láctea que procesan 13.500 litros diarios y una importante producción familiar de productos derivados lácteos tradicionales que son reconocidos y demandados en la zona. Se destacan La Overita de Trancas y la Quesería Comunitaria de Benjamín paz que son de gestión municipal 
        </p>
        <h1 className=" text-center text-2xl font-bold mt-2 text-blue-800 ">La ganadería</h1>
        <p className=" text-slate-700 text-lg mt-3 indent-12 text-justify mx-auto p-6 "> 
        Se distinguen 2 tipos de sistemas productivos de ganado menor, por un lado hacia la zona montañosa realizan trashumancia aproximadamente 50 familias que crían caprinos y ovinos aprovechando a partir de Diciembre las pasturas naturales de altura, volviendo a las laderas de montaña a mediados de Abril.         </p>

        </div>

     
        

        
      </div>

    </div>
  )
}

export default Produccion