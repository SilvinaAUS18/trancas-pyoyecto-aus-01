import Link from "next/link";
import CarouselFrancisco from "../../componentsFronend/CarrucelFrancisco";
import francisco4 from "../../assets/imagenes/francisco4.jpg"
import francisco5 from "../../assets/imagenes/san.jpg"

function SanFrancisco(){
    return(
        <div>
              <div className="container bg-gradient-to-b from-blue-100 to-orange-100 via-sky-100">
               <h1 className="text-left text-4xl font-bold italic text-blue-800 ml-10"> San Francisco Solano </h1>
                <p className=" text-slate-700 text-lg mt-6 indent-12 text-justify mx-auto p-6"> Fue un fraile franciscano que dedico su vida la evangelización. Nació el 10 de marzo de 1549 en la ciudad de Montilla provincia de Córdoba en Andalucía. A los veinte años decide vestir el sayal franciscano y acude al convento de San Lorenzo.<br /> Se ordenó sacerdote en 1576. Solicito ser enviado a misionar al Norte de África, pero su pedido fue rechazado. 
                 </p>  
                 <div className="flex items-center justify-center container mx-auto  ">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto">
                <p className=" text-slate-700 text-lg  text-justify mx-auto p-6 pt-0">
                    
                Su primer milagro conocido fue siendo vicario de Arruzafa, había una serpiente de gran tamaño que atacaba al ganado y generaba terror en la población, se cuenta que San Francisco reprimió a la serpiente y le ordeno ir al convento, una vez allí la alimento y la misma se retiro para no volver a ser vista. <br />
                .<br />En 1588 solicito misionar en América, en la región del Tucumán. El viaje al nuevo mundo no fue fácil, paso por naufragios y muchos peligros hasta llegar a su destino, en su camino iba evangelizando y realizando milagros..<br />
                 Asombraba a sus contemporáneos ya que los nativos indígenas lo escuchaban y pronto pedían ser bautizados..<br /> Solo con una cruz en las manos y su vos pausada lograba ser entendido. Aprendía rápidamente las lenguas de los indígenas lo que le permitía una mejor comunicación. 
                
                .<br />En su paso por Tucumán en el año 1590 se registró otro de sus milagros: 
                Se cuenta que un día de verano había una larga sequía, las lluvias no llegaban, la tierra se partía de tanto como en los desiertos, mientas los animales morían o migraban a tierras altas en busca del agua, ya no había que cazar para comer, ni agua que beber, todo seco, todo muerto.
                <br /> De pronto, a lo lejos se escuchó una rara melodía, los nativos embelesados, perplejos, no sabían que pasaba, hasta que por un sendero vieron la silueta de un hombre vestido con habito marrón y con un extraño instrumento entre sus manos, lejos de asustarse, les dio curiosidad y se fueron acercando poco a poco, atraídos por música tan bella, Francisco Solano comenzó a cantar con su voz de ángel.
                <br /> De pronto, se vio rodeado de una multitud de curiosos nativos que lo contemplaban como a alguien bajado del mismo cielo. 
                <br />En un momento el canto y la música dejo de sonar y Solano habló, pero no hablo en español, sino en la lengua nativa, todos quedaron impresionados. 
                <br />Aquel hombre los entendía y así fue como le contaron con amargura y tristeza, ‘padrecito, padrecito, aquí el agua no llega, no hay lluvias, las plantas se mueren, los animales ya no están, el hambre y la sed está matando el pueblo, no sabemos qué hacer’.
                <br />
                <br />
                <strong>Dicen que Solano se levantó, acaricio la cabeza de un niño, contemplo a una madre que en sus brazos llevaba a un recién nacido, en medio de tanto espanto y dolor, agarro su bastón compañero de caminos y lo hundió en la tierra, pronunciando palabras que nadie entendía, con la cabeza levantada y sus ojos al cielo, (seguro rezaba pidiendo a Dios), mientas la vara se hundía en el suelo y de pronto, el agua brotó mojando sus pies y bañando el terreno. .<br />Atónitos los nativos no entendían lo que estaba sucediendo y una boca de vertiente cada vez más grande se habría en el suelo..<br /> Dejaron salir agua pura y cristalina, mientras la hondonada del lugar no tardo en llenarse como una pequeña laguna a la que el tiempo se llamaría “Pozo del Pescado” o “Pozo de San Francisco Solano”.</strong>
                    <br />
                    <br />
                    Los devotos del Santo se dividen entre quienes lo recuerdan los días 14 de julio, mientras otros tantos lo hacen cada 24. Lo cierto es que este paraje turístico de Trancas, cada vez que llegan estas dos fechas, recibe una visita extra a la habitual.           
                    <br/>
                    Muchas personas dieron testimonio de haberse mojado con el agua del lugar en zonas enfermas y haberse curado.
                    </p>
                    <div className="mx-auto grid grid-cols-1 p-5">
                     <CarouselFrancisco/>
                     <div className="mx-auto rounded-lg overflow-hidden">
                     <img src={francisco4.src} alt="lola" />
                     <img src={francisco5.src} alt="lola"className="mt-10" />

                     </div>
                    </div>   

                    </div>
                
            </div>
             <Link href="/nuestrahistoria" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out" >VOLVER</Link>
                
             </div> 
        </div>

    )
}
export default SanFrancisco;