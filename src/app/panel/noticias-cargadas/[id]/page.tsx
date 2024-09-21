"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deletePhoto } from "@/actions/uploadActions";
import { connectDB } from "@/lib/db";


async function BlogDetails  ({ params })  {
  const router= useRouter()
  const [blogDetails, setBlogDetails] = useState({});
 console.log(params.id)

 /* async function cargarNoticiasId(){
    connectDB()
    const noticia= await Noticia.findById(params.id)
    return noticia;
  }
*/
  async function cargarNoticiasId() {
    try {
      const response = await fetch(
        `http://localhost:3000/panel/api/noticia/${params.id}`
      );
      const noticia = await response.json();
      console.log(noticia);

      return noticia;
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    cargarNoticiasId();
  }, []);
  
  const handleEditar = async () => {

    const noticiaEdit= params.id
    router.push("/panel/noticias-cargadas/edit")
      
    }
    
  

  const handleBlogDelete = async (imageId) => {

        const response = await fetch(
          `http://localhost:3000/panel/api/noticia/${params.id}`,
          {
            method: "DELETE",
          }
        );

        if (response?.status === 200) {
          await deletePhoto(imageId);
        router.refresh();
        router.push("/panel/noticias-cargadas")
          
        }
        
      }

      

 

  const noticia = await  cargarNoticiasId()

  return (
    <div className=" container mx-auto"> 
        
    <div>
      <h2 className="text-white bg-blue-700 mx-2 my-4 text-3xl font-extrabold">{noticia.categoria}</h2>
    </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 ">
            
            <div>
                <Image
                        src={ noticia.imagen?.url }
                        alt="primera noticia image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full rounded-lg"
                      />
            </div>
            <div>
                <h1 className="text-blue-950 mx-2 my-4 text-3xl font-extrabold">{noticia.titulo}</h1>
                <h2 className="text-2xl font-bold text-blue-950 text-justify my-2">{noticia.bajada}</h2> 
                <p className=" text-xl text-blue-950 text-justify">{noticia.texto}</p>

                <p className=" text-xl text-blue-950 text-justify">{noticia.resumen}</p>
            </div>
        </div>

    
    <div className=" flex justify-between my-5 ">
    <Link
            href={`/panel/noticias-cargadas/edit/${params.id}`}
            className="flex items-center gap-1 text-primaryColor"
    > EDITAR</Link>
        <button onClick={ () => handleBlogDelete(noticia?.imagen?._id)} className="bg-red-700 text-white rounded-xl font-bold p-4" > Borrar Noticia</button>  
    </div>      
    
     <Link href="/panel/noticias-cargadas" className="text-3xl  font-bold text-blue-700"> Volver a Todas las noticias</Link>
    
  </div>

    
  );
};

export default BlogDetails;
