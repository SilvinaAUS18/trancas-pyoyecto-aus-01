"use client"
import Link from "next/link";
import lola from '../../assets/imagenes/Cardlola.jpg'
import bernabe from '../../assets/imagenes/CarBernabe.jpg'
import francisco from '../../assets/imagenes/CarFarcisco.jpg'





function NuestraHistoria() {
  return (
    <div>

      <div className="flex items-center justify-center h-auto container mx-auto bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >

           <div className=" rounded-xl shadow-lg" >
                <div className="p-5 flex flex-col">
                    <div className=" rounded-lg overflow-hidden mx-auto">
                             <img src={lola.src} alt="lola mora"  />
                    </div>
                    <h1 className=" text-2xl md:text-3xl font-medium mt-3 ">Lola Mora</h1>
                    <p className="text-slate-500 text:lg mt-3 "> Una mujer adelantada a su época, <strong>Lola Mora</strong> Nació en <strong>Trancas</strong> en la provincia de Tucumán el 17 de noviembre de 1866</p>
                    <Link href="/lolamora" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out ">VER MAS</Link>

                </div>
            </div>

            <div className=" rounded-xl shadow-lg" >
                <div className="p-5 flex flex-col">
                    <div className=" rounded-lg overflow-hidden mx-auto">
                             <img src={francisco.src} alt="lola mora"  />
                    </div>
                    <h1 className=" text-2xl md:text-3xl font-medium mt-3 ">San Francisco</h1>
                    <p className="text-slate-500 text:lg mt-3 "> En su paso por Tucumán en el año 1590 se registró otro de sus milagros, el llamado <strong>POZO DE SAN FRANCISCO</strong> en <strong>TRANCAS</strong></p>
                    <Link href="/sanfrancisco" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out ">VER MAS</Link>

                </div>
            </div>


            <div className=" rounded-xl shadow-lg" >
                <div className="p-5 flex flex-col">
                    <div className=" rounded-lg overflow-hidden mx-auto">
                             <img src={bernabe.src} alt="lola mora"  />
                    </div>
                    <h1 className=" text-2xl md:text-3xl font-medium mt-3 ">Bernabe Araoz</h1>
                    <p className="text-slate-500 text:lg mt-3 "> El héroe de la batalla de Tucumán, un gran organizador de ejércitos y primer gobernador de  de Tucumán</p>
                    <Link href="/bernabearaoz" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out ">VER MAS</Link>

                </div>
            </div>

        </div> 

        



      </div>
      </div>

  )
}

export default NuestraHistoria