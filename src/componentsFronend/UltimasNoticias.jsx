"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
//import moment from "moment";

const UltimasNoticias = ({ ultimaNoticia }) => {

  return (
    <section>
      <div className="grid grid-cols gap-10 text-blue-950  ">
        {ultimaNoticia?.length > 0 &&
          ultimaNoticia?.map((item, index) => (
            <div  key={index} className="container">

              <Link href={`/panel/noticias-cargadas/home/${item?._id}`}>
              <div className="flex flex-col md:flex-row items-center gap-8 text-blue-800">
                <div className="w-full lg:w-2/5 sm:w-4/5 ">
                  <Image
                    src={ item.imagen?.url }
                    alt="blog image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg mb-2"
                  />
                 </div>
                  <div className="w-full lg:w-3/5 space-y-5 bg-slate-100">
                    <div className="flex items-center gap-3 text-xs">
                      <p className="text-primaryColor">{item?.categoria}</p>
                      <p className="flex items-center gap-1 text-paragraphColor">
                        <AiTwotoneCalendar />
                      </p>
                    </div>

                    <div className="space-y-10">
                      <h2 className="text-blue-950  text-xl mx-2 text-justify">{item?.titulo}</h2>
                      <p className="text-blue-950  text-lg mx-2 text-justify">{item?.bajada}</p>
                    </div>


                    <p className="text-blue-950  text-lg mx-2 text-justify">{item?.resumen}</p>

                  </div>

                </div>

              </Link>
            </div>
          ))}
      </div>
      <Link href="/panel/noticias-cargadas/home" className="text-xl  font-bold bg-gray-900 text-white px-1 rounded-2xl "> ver todas las Noticias</Link>
      </section>
  );
};

export default UltimasNoticias;
