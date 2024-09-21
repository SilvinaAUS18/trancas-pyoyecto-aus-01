
import React from "react";
import UltimasNoticias from "./UltimasNoticias"
import Noticia from "../model/Noticia"
import {connectDB} from "@/lib/db"

/*async function cargarNoticias(){
  connectDB()
  const noticia= await Noticia.find()
  return noticia;
}*/
async function fetchNoticiasUltima() {
  const res = await fetch("http://localhost:3000/panel/api/noticia", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CardHome = async () => {
const noticias = await fetchNoticiasUltima()
const reversed = noticias.reverse();
const ultimaNoticia = reversed?.length  && reversed.slice(0,3)

  return (
    <div >
      {reversed?.length > 0  ? (
        <>
        <div className="container">
          <h2 className="text-center my-10">
            <span className="text-primaryColor text-2xl">Ultimas</span>{" "}
            Noticias
          </h2>
          <UltimasNoticias ultimaNoticia={ultimaNoticia} />
        </div>
        </>
      ) : (
        <h3>Final...</h3>
      )}
    </div>
  );
};

export default CardHome;
