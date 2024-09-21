"use client"
import intendente from '../../assets/imagenes/CarIntendente.jpg'
import intendente2 from '../../assets/imagenes/CarIntendente2.jpg'
import intendente3 from '../../assets/imagenes/intendente03.jpg'





function Intitucional() {
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-center h-auto container mx-auto  ">
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200">
          <div className=" flex flex-col rounded-lg overflow-hidden mx-auto mt-5 ">
          <div>
          <img src={intendente.src} width={400}alt="intendente" className="mt-2" />

          </div>
          <div>
          <img src={intendente2.src} width={400}alt="intendente"  className="mt-10 mb-5"/>

          </div>
          <div className='visible '>
          <img src={intendente3.src} width={400} alt="intendente"  className="mt-10 mb-5  "/>
          </div>


          </div>
           <div className=" mx-auto ">

          <h1 className=" text-center text-4xl font-bold mt-10 text-blue-800 "> INTENDENTE</h1>
           
        <p className=" text-slate-700 text-lg mt-6 indent-12 text-justify mx-auto p-6 "> 
                <strong>Antonio Gabriel Gustavo Moreno</strong> nació el 14 de noviembre de 1970 en Trancas, Tucumán, Argentina.<br />
                Es hijo de Audelina del Valle Mattos, maestra, y Roberto Moreno, quien tuvo el honor de ser el primer intendente de Trancas en el año 1983.<br />
                 Además,  es nieto de Antonio Ebaich Moreno (Paterno) y Pedro Gabriel Mattos (Materno) ambos diputados y senadores y sobrino del reconocido legislador 
                 y ex Diputado Nacional  Antonio Moreno.<br />
                Su infancia transcurrió entre los rincones históricos y vibrantes de Trancas, donde absorbió los valores de servicio público y dedicación que 
                caracterizaban a su familia.<br />
                Creció en la ciudad de Trancas y completó su educación secundaria en el Colegio Instituto Privado San Joaquín. <br />
                Tras graduarse de la Universidad Santo Tomás de Aquino de Tucumán con el título de abogado, Antonio trabajó incansablemente en su carrera profesional.<br />
                
                Durante 25 años consecutivos, ejerció la abogacía de manera independiente, consolidando su reputación como un profesional dedicado y comprometido 
                con su comunidad. Su pasión por el servicio público lo llevó a desempeñarse como asesor letrado de la Municipalidad de Trancas, un rol que desempeñó 
                con honor y responsabilidad durante las dos gestiones de su hermano, Raúl Roberto Moreno (h). <br />Su profundo compromiso con el bienestar de su comunidad 
                lo llevó a postularse como candidato a intendente en las elecciones del 2023.<br />
                En el año 2023, Antonio fue elegido como intendente del municipio de Trancas, un honor que refleja la confianza y el apoyo de su comunidad.<br /> Bajo su 
                liderazgo, la ciudad experimentó un renacimiento, con iniciativas innovadoras y un enfoque centrado en el progreso y la inclusión. <br />Actualmente, está 
                ejerciendo su cargo durante el periodo 2023-2027, comprometido a trabajar incansablemente por el desarrollo y el bienestar de su ciudad.<br />
                En el ámbito personal, Antonio está casado con María Noelia Sanna desde el año 1998, siendo  padres de siete hijos, quienes son su inspiración y 
                motivación en cada paso que da.<br />
                Antonio Gabriel Gustavo Moreno es un ejemplo de dedicación, compromiso y liderazgo, es más que un líder político y un abogado destacado; es un
                 hombre de principios arraigados, cuyo compromiso con su comunidad y su familia lo define como una figura ejemplar, cuyo legado perdurará en la 
                 historia de Trancas y en la memoria de quienes tuvieron el privilegio de conocerlo y trabajar junto a él.                
                </p>
                </div>

        </div>
      </div>
      </div>
      

  )
}

export default Intitucional