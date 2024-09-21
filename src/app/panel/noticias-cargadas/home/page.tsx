import CardNoticiastodo from "@/components/CardNoticiatodo"
import Link from "next/link";



async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/panel/api/noticia/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function HomeNoticias(){

  const noticia = await  fetchBlogs()
  const reversed = noticia.reverse();
  
return(
  <div className=" container mx-auto"> 
    {
      reversed.map(reversed =>(
        <CardNoticiastodo noticia={reversed} key={reversed._id}/>

      ))}
      
    <div className=" container  rounded-md  ">

          <Link href="/" className="text-xl  font-bold bg-gray-900 text-white px-1 rounded-2xl "> Volver al Home</Link>
    </div>
  </div>
)
}
export default HomeNoticias;
