import CarouselLola from "../../componentsFronend/CarrucelLola";
import lola5 from "@/assets/imagenes/lola5.jpg"

import lola4 from "@/assets/imagenes/Carlola4.jpg"
import Link from "next/link";

function LolaMora(){
    return(
        <div>
              <div className="bg-gradient-to-b container from-blue-100 to-orange-100 via-red-100">
               <h1 className="text-left text-4xl font-bold italic text-blue-800 ml-10"> Lola Mora </h1>
                <p className=" text-slate-700 text-lg mt-6 indent-12 text-justify mx-auto p-6"> Fue una mujer adelantada a su época, llego a hacer cosas que para una mujer no estaban permitidas. Fue reconocida a nivel internacional por su talento. 
                Su nombre completo es Dolores, Candelaria Mora Vega de Hernández.<br /> 
                Lola Mora Nació en <strong>Trancas</strong> en la provincia de Tucumán el 17 de noviembre de 1866.
                 Nació en su casa paterna que se ubicaba frente a la antigua iglesia se Trancas Viejo, siendo bautizada en esta misma iglesia.
                 Fue la tercera de siete hermanos.<br /> Para 1885 cuando ella tenía 7 años la familia se trasladó a San Miguel de Tucumán por el estudio de los hijos. 
                 </p>  
                 <div className="flex items-center justify-center container mx-auto  ">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto">
                     <div className="mx-auto grid grid-cols-1 p-5">
                     <CarouselLola />
                     <div className="mx-auto mt-5 rounded-lg overflow-hidden">
                       <img src={lola5.src} width={400} alt="lola" />

                     </div>


                     <div className="mx-auto rounded-lg mt-5 overflow-hidden ">
                     <img src={lola4.src} alt="lola" />

                     </div>
                    </div>   
                    <p className=" text-slate-700 text-lg  text-justify mx-auto p-6 pt-0">
                    
                A sus 18 años su madre muere de neumonía y su padre 3 días después de un infarto, no soporto la pérdida de su esposa. La muerte de sus padres cambio su vida, ahora Lola tuvo la libertad de elegir su destino.
                <br /> En 1887 llego para instalarse en Tucumán el pintor italiano Santiago Falcucci, Lola estudio con el pintura, dibujo y retrato, aquí es cuando Lola se inclina con el Neoclasicismo del S. XVII y el romanticismo italiano que marcaron sus obras.
                Realizo un retrato del gobernador de Salta, Delfín Leguizamón. <br />  Después 20 retratos de los gobernadores de Tucumán.
                
                Para 1896 el presidente José Félix Uriburu le da una beca de 100 pesos mensuales por 2 años para ir a estudiar a Europa. En Roma fue alumna del pintor Francesco Paolo Michetti con él estudio pintura y fotografía. Y con el escultor Constantino Barbella aprendió escultura con terracota (arcilla moldeada y endurecida al horno). 
                Finalmente fue tomada como alumna por Giulio Monteverde. Monteverde era considerado el nuevo Miguel Ángel, con el aprendió a trabajar el mármol. 
                A partir de aquí la carrera de Lola Mora fue en ascenso e instalo un taller en Roma.<br /> 
                En el año 1900 ganó una medalla de oro por un autorretrato en mármol de Carrara en la exposición de Paris. El mármol de Carrara se caracteriza por su blancura y sus tonalidades azulado-grisáceo. Podemos apreciarlo en la estatua de la Libertad en la plaza Independencia.
                <br /> Cuando regreso a la Argentina se le encargo una escultura de Juan Bautista Alberdi para Tucumán. Es la que actualmente está en la plaza Alberdi frente a la estación del ferrocarril. La estación era la entrada de los viajeros a Tucumán.
                <br /> En Salta se le encargo las estatuas y relieves fundidos para el monumento del 20 de febrero (conmemora la batalla de Salta).
                La obra más importante de Lola Mora fue la Fuente de las Nereidas. Inaugurada en 1903 en el parque Colon en Buenos Aires.
                <br /> Lola Mora era para ese momento una artista reconocida en Argentina como en Europa. Le ofrecieron realizar una escultura de la reina Victoria como también del zar Alejandro I. Pero no acepto ya que para hacer el trabajo debía aceptar la nacionalidad Británica o rusa. Lola Mora siguió con los encargos de su país.<br />  Para 1916 hay un cambio de gobierno y Lola pasa al olvido.
                Lola Mora fue la primera escultora de América Latina. Fue una mujer que desafió al mundo que la rodeaba, realizo cosas que solo estaban destinadas para los hombres y como muchos de los personajes de nuestra historia terminó en la pobreza y el olvido, falleció el 7 de junio de 1936 a los 69 años en la ciudad de Buenos Aires.  
                En su memoria, el Congreso de la Nación Argentina instituyó la fecha de su natalicio el 17 de noviembre, como “Día Nacional del Escultor y las Artes Plásticas”.

                    </p>


                    </div>
                
            </div>
             <Link href="/nuestrahistoria" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out" >VOLVER</Link>


            
                
             </div> 
 
            
        </div>

    )
}
export default LolaMora;