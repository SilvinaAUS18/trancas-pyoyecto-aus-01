"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextArea from "@/components/TextArea";
import Image from "next/image";
import { deletePhoto } from "@/actions/uploadActions";

interface FormValues {
  titulo: string;
  bajada: string;
  texto: string;
  resumen: string;
  categoria: string;
  photo: string;
  newImage:string;

  }
  const inicialNoticia :FormValues  = {
    titulo: "",
    bajada: "",
    texto: "",
    resumen: "",
    categoria: "ACTUALIDAD",
    photo: "",
    newImage: "",
  };

const EditBlog = ({ params }) => {
  const CLOUD_NAME="dph7ozqvf"
  const UPLOAD_PRESET="trancas_imagenes"

  const [error, setError] = useState("");
  const [success , setSuccess] =  useState("")
  const [cargando, setCargando]= useState("")


  const [state, setState] = useState(inicialNoticia);
console.log(state)
  const router = useRouter();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`http://localhost:3000/panel/api/noticia/${params.id}`);

        if (res.status === 200) {
          const blogData = await res.json();

          setState((prevstate) => ({
            ...prevstate,
            titulo: blogData.titulo,
            bajada: blogData.bajada,
            texto: blogData.texto,

            resumen: blogData.resumen,
            categoria: blogData.categoria,
            photo: blogData.imagen,
          }));
        } else {
          setError("Error fetching blog data");
        }
      } catch (error) {
        setError("Error fetching blog data");
      }
    }

    fetchBlog();
  }, [params.id]);



  const handleChange = (event) => {
    setError("");
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setState({ ...state, [name]: files[0] });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newImage, titulo, categoria, texto, bajada, resumen } = state;

    if (!titulo || !texto || !categoria || !bajada || !resumen) {
      setError("Please fill out all required fields.");
      return;
    }

    if (newImage) {
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (newImage.size > maxSize) {
        setError("File size is too large. Please select a file under 5MB.");
        return;
      }
    }

    if (titulo.length < 4) {
      setError("Title must be at least 4 characters long.");
      return;
    }

    if (texto.length < 20) {
      setError("Description must be at least 20 characters long.");
      return;
    }

    if (bajada.length < 10) {
      setError("Excerpt must be at least 10 characters long.");
      return;
    }

    if (resumen.length < 6) {
      setError("Quote must be at least 6 characters long.");
      return;
    }

    try {
      setError("");
      setSuccess("");

      let imagen;

      if (state.newImage) {
        imagen = await uploadImage();

        if (state.photo?.id) {
          await deletePhoto(state.photo.id);
        }
      } else {
        imagen = state.photo;
      }

      const updateBlog = {
             titulo,
              bajada,
              texto,
              resumen,
              categoria,
              imagen,
      };

      const response = await fetch(
        `http://localhost:3000/panel/api/noticia/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(updateBlog),
        }
      );

      if (response?.status === 200) {
        setSuccess("Blog updated successfully.");
        setTimeout(() => {
          router.refresh();
          router.push(`/panel/noticias-cargadas/${params.id}`);
        }, 1500);
      } else {
        setError("Error occurred while updating blog.");
      }
    } catch (error) {
      console.log(error);
      setError("Error occurred while updating blog.");
    }

  };

  const uploadImage = async () => {
    if (!state.newImage) return;

    const formdata = new FormData();

    formdata.append("file", state.newImage);
    formdata.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formdata,
        }
      );

      const data = await res.json();
      const imagen = {
        id: data["public_id"],
        url: data["secure_url"],
      };

      return imagen;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancleUploadImg = () => {
    setState({ ...state, ["newImage"]: "" });
  };

  return (
    <section className="container max-w-3xl">
      <h2 className="mb-5">
        <span className="special-word">Editar</span> Noticias
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Titulo"
          type="text"
          name="titulo"
          placeholder="Write you title here..."
          onChange={handleChange}
          value={state.titulo}
        />

        <TextArea
          label="bajada"
          rows="2"
          name="bajada"
          placeholder="Write you description here..."
          onChange={handleChange}
          value={state.bajada}
        />

        <TextArea
          label="texto"
          rows="4"
          name="texto"
          placeholder="Write you excerpt here..."
          onChange={handleChange}
          value={state.texto}
        />

        <TextArea
          label="resumen"
          rows="2"
          name="resumen"
          placeholder="Write you quote here..."
          onChange={handleChange}
          value={state.resumen}
        />

        <div>
          <label className="block">Seleccionar Opcion</label>
          <select
            name="categoria"
            onChange={handleChange}
            value={state.categoria}
            className="block rounded-lg w-full p-3 bg-primaryColorLight"
          >
            <option value="ACTUALIDAD">ACTUALIDAD</option>
            <option value="DEPORTES">DEPORTES</option>
            <option value="TURISMO">TURISMO</option>
            <option value="PRODUCCION">PRODUCCION</option>
            <option value="INSTITUCIONAL">INSTITUCIONAL</option>          
            </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Upload Image</label>

          <input
            onChange={handleChange}
            type="file"
            name="newImage"
            accept="image/*"
          />

          {state.newImage ? (
            <div>
              <Image
                src={URL.createObjectURL(state.newImage)}
                priority
                alt="Sample image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 mt-5"
              />

              <button onClick={handleCancleUploadImg}>Cancle</button>
            </div>
          ) : (
            <div>
              {state.photo && state.photo["url"] && (
                <div>
                  <Image
                    src={state.photo.url}
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
          )}
        </div>


        {success && <div className="text-green-700">{success}</div>}

        <button type="submit" className="btn">
          GUARDAR
        </button>
      </form>
    </section>
  );
};

export default EditBlog;
/*
import React, { useState,  useEffect,ChangeEvent, FormEvent } from "react";
import InputNoticia from "@/components/ImputNoticia";
import TextArea from "@/components/TextArea";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormValues {
    titulo: string;
    bajada: string;
    texto: string;
    resumen: string;
    categoria: string;
    photo: string;
    }

const inicialNoticia :FormValues  = {
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
  const [cargando, setCargando]= useState("")


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
              }, 1500); 
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

    <div className="container max-w-3xl bg-blue-200">

      <form onSubmit={handleSubmit} className="space-y-5">
        <header className=" flex justify-between"> 
        <h2 className="mb-5 text-2xl font-extrabold"> Crear Noticia </h2> 
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
          rows="8"
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
         {cargando ? "CARGANDO" : " CREAR Noticia" 
         }
        </button>


      </form>
      <div className="flex justify-between my-4">
        <Link href="/panel" className="text-3xl  font-bold text-blue-700 bg-white  px-2 "> Volver al Panel</Link>


      </div>

    </div>  
    )
}
export default FormNoticia;

*/