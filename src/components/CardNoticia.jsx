import React from "react";
import Image from "next/image";
import Link from "next/link";

import demoImage from "../assets/imagenes/actualidad.jpg"

function CardNoticias({noticia}){
  return(
    <div>
    <Link href={`/panel/noticias-cargadas/${noticia?._id}`}>
    <div>
              <h2 className="text-white bg-blue-900 mx-2 my-4 text-xl font-extrabold">{noticia?.categoria}</h2>
            </div>
        <div className=" grid lg:grid-cols-2  sm:grid-cols-1 gap-8 ">
            
            <div >
                <Image
                        src={ noticia.imagen?.url }
                        alt="primera noticia image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-full h-full rounded-lg  "
                      />
            </div>
            <div>
                <h1 className="text-blue-950 mx-2 my-4 text-xl text-justify font-extrabold">{noticia?.titulo}</h1>
                <h2 className="text-xl font-bold text-blue-950 text-justify my-2">{noticia?.bajada}</h2> 
                <p className=" text-xl text-blue-950 text-justify">{noticia?.resumen}</p>
            </div>
        </div>

    </Link>
    </div>      
  )
}
export default  CardNoticias;


/*import React from "react";
import Image from "next/image";
import demoImage from "../../public/imagenes/actualidad.jpg"
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";
import moment from "moment";

const PrimeraNoticia = ({primerNoticia }) => {
  const timeStr = primerNoticia?.createdAt;
  const time = moment(timeStr);
  const formattedTime = time.format("MMMM Do YYYY");
  return (
    <section> 
      <Link href={`/panel/noticias/${primerNoticia?._id}`}>
        <div className="flex flex-col md:flex-row items-center gap-8 text-blue-800">
          <div className="w-full lg:w-2/5">
            <Image
              src={primerNoticia?.image ? primerNoticia.image?.url : demoImage}
              alt="primera noticia image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="w-full lg:w-3/5 space-y-5 bg-slate-100">
            <div className="flex items-center gap-3 text-xs">
              <p className="text-primaryColor">{primerNoticia?.category}</p>
              <p className="flex items-center gap-1 text-paragraphColor">
                <AiTwotoneCalendar />
                {formattedTime}
              </p>
            </div>

            <div className="space-y-10 ">
              <h2 className="text-blue-950 mx-2 ">{primerNoticia?.title}</h2>
              <p className=" text-lg text-blue-950 text-justify  ">{primerNoticia?.bajada}</p>
            </div>

          </div>
        </div>
        <div>
        <p className=" text-xl text-blue-950 text-justify">{primerNoticia?.texto}</p>

        </div>
      </Link>
    </section>
  );
};

export default PrimeraNoticia;*/
