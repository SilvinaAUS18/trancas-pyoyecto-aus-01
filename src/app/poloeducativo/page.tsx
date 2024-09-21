"use client"
import puntodigital from '@/assets/imagenes/puntoDigital.jpg'
import unt from '@/assets/imagenes/unt.jpg'
import utn from'@/assets/imagenes/utn.jpg'
import aticana from '@/assets/imagenes/aticana.jpg'
import CarrucelPolo from '@/componentsFronend/CarrucelPolo'
function PoloEducativo() {
  return (
    <div className='bg-gradient-to-b container from-blue-100 to-orange-100 via-red-100'>
      <div className="  border-spacing-2  container bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200 ">
        <p className=" pl-4 py-10 text-3xl text-center text-blue-800  font-semibold italic  ">En TRANCAS la educación acompaña el crecimiento de la comunidad</p>
        <h2 className=" py-8 text-2xl text-blue-800 font-bold italic text-center"> Un proceso largo, pero sostenido en el tiempo  </h2>
      <div className="mx-auto">
      <CarrucelPolo></CarrucelPolo>  
      <div className="  bg-sky-200 rounded-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
        <div className="mx-auto w-1/3 p-4">
        <img src={puntodigital.src} alt="polo" className="py-5"/>
        </div>
        <div className="w-2/3 my-auto sm:mx-auto">
        <p className="text-xl text-blue-800 font-bold text-justify sm:text-center sm:m-5">La iniciativa de inclusión digital y capacitación tecnológica más extensa de la Argentina</p>
        </div>

      </div>

      <div className=" mt-5 bg-sky-200 rounded-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
        <div className="mx-auto w-1/3 py-5">
        <img src={unt.src} alt="polo" className="py-5" />
        </div>
        <div className="w-2/3 my-auto sm:mx-auto ">
        <p className="text-xl text-blue-800 font-bold text-justify sm:text-center sm:m-5">Convenio con la UNT Carrera: Derecho en el punto digital</p>
        </div>

      </div>
      <div className=" mt-5 bg-sky-200 rounded-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  ">
        <div className="mx-auto w-1/3 p-4">
        <img src={utn.src} alt="polo" />
        </div>
        <div className="w-2/3 my-auto sm:mx-auto">
        <p className="text-xl text-blue-800 font-bold text-justify sm:text-center sm:m-5">Convenio con UTN REGIONAL TUCUMÁN:<br/> Tecnicatura en Mecatrónica, Tecnicatura en Mantenimiento Industrial y Tecnicatura en Programación.</p>
        </div>
      </div>

      <div className=" mt-5 bg-sky-200 rounded-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
        <div className="mx-auto w-1/3 p-4">
        <img src={aticana.src} alt="polo" />
        </div>
        <div className="w-2/3 my-auto sm:mx-auto">
        <p className="text-xl text-blue-800 font-bold text-justify sm:text-center sm:m-5">Inglés convenio con ATICANA</p>
        </div>
      </div>

      </div>

      </div>
      </div>

  )
}

export default PoloEducativo;