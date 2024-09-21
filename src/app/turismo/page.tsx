"use client"
import boyero from '../../assets/imagenes/elBoyero.jpg'
import templo from '../../assets/imagenes/temploVillaVieja.jpg'
import pozo from '../../assets/imagenes/pozoSanFrancisco.jpg'


         // <img   src={boyero.src} alt="boyero" className="m-2 rounded-2xl"/>

function Turismo() {
  return (
    <div>
      <div className="container bg-gradient-to-b from-blue-100 to-blue-200 via-cyan-200">

        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" p-5 m-2">
        <iframe
              className='w-full h-80'
              title="Festival del Caballo"
              src="https://res.cloudinary.com/dph7ozqvf/video/upload/v1726024251/EL_BOYERO_kxyurj.mp4"
              frameborder="0"
              allowfullscreen
            />
        </div>
          <div className="my-auto">
              <h1 className="text-2xl md:text-3xl font-medium  mx-10">El Boyero</h1>
              <p className="text-slate-500 text:2xl mt-3 mx-10 text-justify">El balneario el <strong  >Boyero</strong>, ubicado en la ciudad de <strong >Trancas</strong>, luce renovado para recibir a turistas que quieran disfrutar del verano en un lugar tranquilo y rodeado de naturaleza.
                          <br />Un lugar para descansar de la ciudad y  disfrutar del aire libre <br />
                          Cuenta  con luz eléctrica, baños, duchas externas, merenderos y asadores.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-10">
          <img   src={templo.src} alt="boyero" className="m-2 rounded-2xl"/>
          </div>
          <div className="my-auto">
              <h1 className="text-2xl md:text-3xl font-medium  mx-10">Historico de Villa Vieja</h1>
              <p className="text-slate-500 text:2xl mt-3 mx-10 text-justify"><strong>Monumento Histórico Nacional</strong> <br />
                  Templo del Sagrado Corazón, cuyos muros fueron testigos del <strong > fusilamiento de Bernabé Aráoz</strong>, primer Gobernador de Tucumán y del Bautismo de la célebre escultora tucumana <strong > Lola Mora</strong>. 
                  De estilo postcolonial austero. <br />
                  La fachada plana <br />
                  De estilo colonial, con techos de tejas, el templo es el único edificio que queda en pie del antiguo pueblo de Trancas. Fue construido alrededor de 1700 por los jesuitas, 1ª Iglesia Parroquial de la Villa de Trancas. Era paso para los viajeros a Salta. Fue escenario de las Guerras por la Independencia y de las guerras civiles. 
                  <br />

                  La cubierta es de tejas sobre cerchas de madera.<br />
                  En su interior se conserva patrimonio de arte religioso: la talla del santo patrono San Joaquín, un San José y un Nazareno. 
           </p>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-10">
          <img   src={pozo.src} alt="boyero" className="m-2 rounded-2xl"/>
          </div>
          <div className="my-auto">
              <h1 className="text-2xl md:text-3xl font-medium  mx-10">Pozo de San Francisco</h1>
              <p className="text-slate-500 text:2xl mt-3 mx-10 text-justify">
              Al norte de <strong > Trancas </strong>, a solo 6 kilómetros, está el Pozo de San Francisco fuente milagrosa que recuerda el paso de San Francisco Solano por ese lugar. <br />  
              La historia  cuenta que en un espacio marcado por la sequía y la falta de lluvias, San Francisco golpeó el piso son su bastón e hizo existir un pozo de agua en Trancas.<br />
              Estamos hablando del conocido “Pozo del pescado”, espacio que es considerado como milagroso por quienes lo visitan. <br />
              La tradición que siguen los creyentes cuenta que san Francisco Solano Intercede en tres pedidos que le hagan a las personas que lo visitan por primera vez. <br />
              Dios utilizo las manos del Santo para hacerlo, cumpliendo con aquel mandato bíblico:<br /><strong >“Dad de beber al Sediento, y Dad de comer al hambriento, todo lo que hagas por uno de los más pequeños de mis hijos, por mí lo estás haciendo”.</strong>              
              </p>
          
          </div>
        </div>



      </div>
      </div>

  )
}

export default Turismo;