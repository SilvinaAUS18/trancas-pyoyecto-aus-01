import Link from "next/link";
import carbernabe1 from "../../assets/imagenes/carbernabe1.jpg";
import carbernabe2 from "../../assets/imagenes/CarBernabe2.jpg"

function BernabeAraoz(){
    return(
        <div>
              <div className=" container bg-gradient-to-b from-blue-100 to-orange-100 via-sky-100">
               <h1 className="text-left text-4xl font-bold italic text-blue-800 ml-10"> Bernabe Araoz</h1>
                <p className=" text-slate-700 text-lg mt-6 indent-12 text-justify mx-auto p-6"> Nació en 1776, en Monteros, provincia de Tucumán . Era uno de los seis hijos,  miembro de una extensa familia de comerciantes locales, de importante fortuna personal. <br/> <strong> Héroe Nacional </strong>
                ,fue un militar y político argentino, gobernador y caudillo de la provincia de Tucumán durante las décadas de 1810 y 1820.

                 </p>  
                 <div className="flex items-center justify-center container mx-auto  ">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto">
                <p className=" text-slate-700 text-lg  text-justify mx-auto p-6 pt-0">
                    
                                    Integró la milicia y, ya en 1803, era portaestandarte del flamante
                    Regimiento de Milicias Disciplinadas de Voluntarios de Caballería del
                    Tucumán. En 1805 se casó con Teresa Velarde, de cuyo matrimonio
                    nacerían siete hijos.<br/>
                    “2017- Año de las Energías Renovables”
                    Adhirió sin vacilaciones al pronunciamiento de mayo de 1810, y ese
                    año fue nombrado Alcalde de Segundo Voto del Cabildo.
                    <br/> Dos años
                    más tarde entra de lleno en la escena pública cuando Manuel
                    Belgrano, con el Ejército del Norte, viene en retirada desde Jujuy con
                    rumbo a Córdoba. 
                    <br/>El vecindario, encabezado por Bernabé Aráoz, se
                    alarma ante tales novedades. 
                    <br/>Aráoz requiere enérgicamente a
                    Belgrano que se detenga en Tucumán y enfrente a los realistas.
                    <br/>
                    Promete ayudarlo con dinero, hombres, cabalgaduras y víveres.
                    <br/>
                    Belgrano se convence y Aráoz cumple su promesa. Moviliza a todo el
                    pueblo en la tarea de reforzar el ejército, que así podrá ganar la batalla
                    del 24 de setiembre de 1812. 

                    En 1817, Aráoz logra que San Miguel de Tucumán cuente con buena
                        agua para beber, costeada por su peculio.
                        <br/>
                        
                        Bernabé Aráoz no pudo escapar al signo violento de su época,
                marcada por las rivalidades entre hombres de diferentes extracciones
                y visiones de país.
                <br/>
                <br/> Envuelto en las guerras civiles que se extendería
                por casi 50 años, terminó injustamente fusilado en <strong>Trancas</strong>, en 1824.
                <br/><br/>
                Páez de la Torre define a Aráoz como ―un patriota decidido y eficaz‖.
                <br/>
                Su acción resultó fundamental para mantener la acción militar de la
                revolución en el norte, y en ese propósito no rehuyó los mayores
                sacrificios.
                <br/> Al comenzar la disolución del poder central de las
                Provincias Unidas, ideó organizar la región en una República de
                Tucumán que la unificara institucionalmente, para contener la anarquía
                y el caos. De lograrlo, sin duda hubiera repetido la gestión de
                gobernante ordenado y progresista que cumplió de 1814 a 1818.
                <br/>
                Sin embargo, sus planes chocaron con las pasiones, las ambiciones y
                los rencores de la época
                <br/>Eso lo precipitó en el incesante guerrear de
                1821 a 1823.
                <br/> Que terminó con su arbitrario fusilamiento
                    </p>
                    <div className="mx-auto grid grid-cols-1 p-5 my-10">
                    <img src={carbernabe1.src} alt="lola" />
                    <img src={carbernabe2.src} alt="lola" />

                    </div>   

                    </div>
                
            </div>
             <Link href="/nuestrahistoria" className="text-center bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 transition-all duration-200 ease-out" >VOLVER</Link>
                
             </div> 
        </div>

    )
}
export default BernabeAraoz;