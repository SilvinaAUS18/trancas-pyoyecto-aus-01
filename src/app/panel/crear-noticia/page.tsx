"use client";
//http://localhost:3000/panel/crear-noticia
import React, { useState,  useEffect,ChangeEvent, FormEvent } from "react";
import InputNoticia from "@/components/ImputNoticia";
import TextArea from "@/components/TextArea";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Link from "next/link";



const inicialNoticia   = {
    titulo: "",
    bajada: "",
    texto: "",
    resumen: "",
    categoria: "ACTUALIDAD",
    photo: "",
  };
 
 const  FormNoticia =  ()=>{
  const CLOUD_NAME="dph7ozqvf"
  const UPLOAD_PRESET="trancas_imagenes"

  const [newNoticia, setNewNoticia]= useState(inicialNoticia);
  const [error, setError] = useState("");
  const [success , setSuccess] =  useState("")

  const router=useRouter();

    

  



    const handleChange = (e) => {
        setError("")
        const {name, value, type, files} = e.target;
     
        if(type === 'file') {
            setNewNoticia({...newNoticia, [name]: files[0]});
        } else {
            setNewNoticia({...newNoticia, [name]: value})
        }
      };


    const handleSubmit = async(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

          const {photo, titulo, categoria, bajada, texto, resumen} = newNoticia;

          if(!titulo || !categoria || !bajada || !texto || !resumen) {
            setError("Todos los campos son requeridos");
            return;
          }


          try{
            setError("")
            setSuccess("")
            const imagen = await uploadImage();
            const newNoticiaGuardada = {
              titulo,
              bajada,
              texto,
              resumen,
              categoria,
              imagen,
            }
            console.log(newNoticiaGuardada);
            const response = await fetch("http://localhost:3000/panel/api/noticia", {
              headers: {
              "Content-Type": "application/json" },
                method: "POST",
              body: JSON.stringify(newNoticiaGuardada)
            })

            if(response?.status === 201){
              setSuccess("Noticia Creada Satisfactoriamente")
              setTimeout(() => {
                router.refresh();
                router.push("/panel/noticias-cargadas")
              }, 1000); 
            } else {
              setError("Ocurrio un error al crear la Noticia")
            }
      
            }catch(error){
              setError("Ocurrio un error al crear la Noticia")
            }

          }
          
 
          const uploadImage = async () => {
            if(!newNoticia.photo) return;
        
            const formdata = new FormData();
        
            formdata.append('file', newNoticia.photo);
            formdata.append("upload_preset", UPLOAD_PRESET);
        
            try{
              const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formdata
              });
        
              const data = await res.json();
              const imagen = {
                id: data["public_id"],
                url: data['secure_url']
              }
        
              return imagen;
            } catch(error) {
              console.log(error)
            }
        }
    
return(

    <div className=" max-w-3xl lg:mx-auto bg-blue-200 sm:mx-28">

      <form onSubmit={handleSubmit} className="space-y-2 mx-4">
        <header className=" flex justify-between"> 
        <h2 className="mb-2 text-2xl font-extrabold text-blue-900"> Crear Noticia </h2> 
        </header>

        <InputNoticia
          label="Titulo"
          type="text"
          name="titulo"
          placeholder="Escribir aqui el Titulo..."
          onChange={handleChange}
          value={newNoticia.titulo}
        />

        <TextArea
          label="Bajada"
          rows="2"
          name="bajada"
          placeholder="Escribir aqui la bajada o sub titulo..."
          onChange={handleChange}
          value={newNoticia.bajada}
        />

        <TextArea
          label="Texto"
          rows="6"
          name="texto"
          placeholder="texto..."
          onChange={handleChange}
          value={newNoticia.texto}
        />

        <TextArea
          label="Resumen"
          rows="2"
          name="resumen"
          placeholder="El resumen de nota..."
          onChange={handleChange}
          value={newNoticia.resumen}
        />

        <div>
          <label className="block">Seleccionar Categoria</label>
          <select
            name="categoria"
            onChange={handleChange}
            value={newNoticia.categoria}
            className="block rounded-lg w-full p-3 bg-zinc-200"
          >
           
            <option value="ACTUALIDAD">ACTUALIDAD</option>
            <option value="DEPORTES">DEPORTES</option>
            <option value="TURISMO">TURISMO</option>
            <option value="PRODUCCION">PRODUCCION</option>
            <option value="INSTITUCIONAL">INSTITUCIONAL</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
          Subir imagen
          </label>
          <input onChange={handleChange} type="file" name="photo" accept="image/*" />
          {newNoticia.photo && (
            <div>
              <Image 
                src={URL.createObjectURL(newNoticia.photo)}
                //src={demoImage}
                priority
                alt="Sample image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 mt-5"
              />
            </div>
            
          )}
        </div>
        {error && <div className="text-red-700">{error}</div>}
        {success && <div className="text-green-700">{success}</div>}

        <button type="submit" className="bg-blue-800 text-white rounded-xl font-bold p-4">
         CREAR NOTICIA
        </button>


      </form>
      <div className="flex justify-between my-4 py-5 mx-5">

        <Link href="/panel" className="text-sm rounded-xl font-bold text-blue-700 bg-white  px-2 "> Volver al Panel</Link>
        <Link href="/panel/noticias-cargadas" className="text-sm  font-bold bg-green-700 text-white px-5 rounded-2xl "> Ver Noticia</Link>

        <Link href="/panel/crear-noticia" className="text-sm  font-bold text-blue-700 bg-white  px-2 rounded-xl "> Cargar otra Noticia</Link>
  

      </div>

    </div>  
    )
}
export default FormNoticia;
