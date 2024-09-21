import Noticia from "@/model/Noticia";
import {connectDB} from '@/lib/db'
import CardNoticias from "@/components/CardNoticia"
import Link from "next/link";


async function cargarNoticias(){
  connectDB()
  const noticia= await Noticia.find()
  return noticia;
}
/*async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/panel/api/noticia/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}*/
async function HomeNoticias(){

  const noticia = await  cargarNoticias()
  
return(
  <div className=" container mx-auto"> 
    {
      noticia.map(noticia =>(
        <CardNoticias noticia={noticia} key={noticia._id}/>

      ))}
      
    <div className=" container flex justify-between bg-lime-200 rounded-md ">
          <Link href="/panel" className="text-xl  font-bold bg-green-700 text-white px-1 rounded-2xl "> Volver al Panel</Link>

          <Link href="/panel/crear-noticia" className="text-xl  font-bold bg-green-700 text-white px-1 rounded-2xl "> Cargar otra Noticia</Link>
    </div>
  </div>
)
}
export default HomeNoticias;
