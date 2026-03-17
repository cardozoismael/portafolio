import { useState ,useEffect, useRef} from 'react'
import './App.css'
import emailjs from "emailjs-com"

function App() {
  const [modal,setModal]= useState(false)

  const enviarCorreo =(e)=>{
    e.preventDefault()
    emailjs.sendForm(
      "service_nh4hoer",     // reemplazá con tu Service ID
      "template_k88gwei",    // reemplazá con tu Template ID
      e.target,
      "jmaD49GUEq7gq6eyo" // reemplazá con tu Public Key
    ).then(
      (result) => {
        console.log("Mensaje enviado:", result.text);
        alert("Tu mensaje fue enviado correctamente ✅");
        e.target.reset()
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Hubo un error al enviar ❌");
      }
    );

  }


//  poner la ruta del curriculum
  const imprimirlo = ()=>{
    const win = window.open(".curriculum") 
    win.onload=()=>{
      win.print()
    }
  }
  const descargarlo =()=>{
    window.location.href=".curriculum"
  }



const sobremiRef = useRef(null);
const proyectoRef = useRef(null);
const contactoRef = useRef(null);

const scrollTo= (ref)=>{
  ref.current?.scrollIntoView({behavior:"smooth"})
}

  const presentacion = "soy programador fullstack de nodejs"
  const [displayedText,setDisplayedText]=useState("");
  const [index,setIndex]=useState(0)

  useEffect(()=>{
    if(index < presentacion.length){
      const timeout=setTimeout(()=>{
        setDisplayedText((prev)=>prev+presentacion.charAt(index))
        setIndex(index+1)
      },100);
      return()=>clearTimeout(timeout)
    }
  },[index,presentacion]
)


  return (
    <>
      <header className='conteiner-nav'>
        <h1 className='titulo'>portafolio online</h1>
        <section className='navegacion'>
          <button onClick={()=>scrollTo(sobremiRef)} className='btn-seccion'>sobre mi</button>
          <button onClick={()=>scrollTo(proyectoRef)} className='btn-seccion'>proyectos</button>
          <button onClick={()=>scrollTo(contactoRef)} className='btn-seccion'>contacto</button>
          <button onClick={()=>{setModal(true)}} className='btn-seccion'>descargar cv</button>
          {
            modal && <>
            <div className='modal'>
              <button onClick={()=>setModal(false)} className='btn-cerrar'>x</button>
              <button onClick={()=>imprimirlo()} className='btn-op'>imprimir</button>
              <button onClick={()=>descargarlo()} className='btn-op'>descargar</button>
            </div>
            </>
          }

        </section>
      </header>

      <main>
        <div ref={sobremiRef} className='conteiner'>
          <div className='conteiner-sobreMi'>
            <h2 className='miNombre'>ismael cardozo</h2>
            <img className='img-foto' src="/avatar.jpg" alt="mi foto" />
            <p className='programador'>{displayedText}<span className='cursor'>|</span></p>
          </div>
          <div className='conteiner-descripcion'>
            <h3 className='titulo-sobremi'>sobre mi</h3>
            <p className='sobre-mi'>Soy desarrollador Fullstack con experiencia en React, Next.js, Express, MongoDB y PostgreSQL, apasionado por construir aplicaciones robustas y escalables. Aunque disfruto trabajar en el frontend para lograr interfaces modernas y funcionales, mi mayor interés está en el backend, donde puedo aplicar lógica, seguridad y optimización para garantizar un rendimiento confiable.
            <br /> <br /> Tengo dominio de librerías y herramientas clave como CORS, Nodemon, Helmet, Express-Validator, Dotenv, Morgan, JSON Web Token y bcrypt, que utilizo para crear APIs seguras, eficientes y bien estructuradas. Me gusta trabajar con buenas prácticas de modularidad, validación y autenticación, siempre buscando que cada proyecto sea mantenible y profesional.
            <br /> <br /> Mi objetivo es integrar soluciones completas, desde la base de datos hasta la interfaz de usuario, aportando calidad y claridad en cada etapa del desarrollo. Me considero persistente, detallista y orientado a resultados, con la motivación constante de seguir aprendiendo y perfeccionando mis habilidades.
            </p>
            <h3 className="titulo-skills">mis skills</h3>
            <section className='seccion-skills'>
              <img className='imgReact' src="./React.png" alt="reactjs" />
              <img src="./Next.png" alt="nextjs" />
              <img src="./Express.png" alt="express" />
              <img src="./mongo.png" alt="mongodb" />
              <img src="./Post.png" alt="postgresql" />
            </section>
        </div>
      </div>


      <div ref={proyectoRef} className='conteiner-proyectos'>
    <h2 className="titulo-proyecto">proyectos</h2>
    <div className='proyectos'>

        <div className='proyectos-sec1'>

          <div className='proyecto'>
            <img src="/proyecto-red-social.png" className='img1'  alt="" />
            <div className='conteiner-descripcion-proyectos'>
            <h2 className='descripcion'>proyecto red social</h2>
            <p className='descripcion' >proyecto donde puedes publicar,modificar o eliminar las publicaciones que haces, en la cual se guarda en la bases de datos.<br></br> <br /> hecho con express,mongoose y cors del lado del backend , del lado del frontend react. </p>
            {/* <button className='descripcion-btn' >ir pagina web</button> */}
            <a href="https://github.com/cardozoismael/app-red-social" target='_blank'><button className='descripcion-btn' >ir github</button></a>
            </div>
          </div>



          <div className='proyecto'>
            <img src="/proyecto-tareas-db.png" className='img1' alt="" />
            <div  className='conteiner-descripcion-proyectos'>
            <h2 className='descripcion'>proyecto tareas</h2>
            <p className='descripcion'>proyecto para crear recordatorio de tareas por hacer ,donde creas tarjetas con titulo y descripcion de la cual puedes modificar o eliminar esas tareas.<br></br><br></br> hecho con express,cors y pg del lado backend y del frontend react</p>
            {/* <button className='descripcion-btn' >ir pagina web</button> */}
             <a href="https://github.com/cardozoismael/app-tareas" target='_blank'><button className='descripcion-btn' >ir github</button></a>
            </div>
          </div>

          <div className='proyecto'>
            <img src="/proyecto-plataforma-gestion.png" className='img1' alt="" />
            <div className='conteiner-descripcion-proyectos'>
            <h2 className='descripcion'>proyecto plataforma de gestion</h2>
            <p className='descripcion'>proyecto con dos roles de usuario y jefe , donde en el usuario solo tiene las opciones de "agregar producto" y hacer "reporte" ,pero solo el jefe puede ver los reportes y tiene mas secciones como los datos de los empleados y los productos que estan en stock o por agotarse. <br></br><br />hecho con express,pg,cors,dotenv del lado del backend y del frontend react  </p>
            {/* <button className='descripcion-btn' >ir pagina web</button> */}
            <a href="https://github.com/cardozoismael/app-plaforma-gestion" target="_blank" ><button className='descripcion-btn' >ir github</button></a>
            </div>
          </div>

          <div className='proyecto'>
            <img src="/proyecto-dashboard.png" className='img1' alt="" />
            <div className='conteiner-descripcion-proyectos'>
            <h2 className='descripcion'>proyecto dashboard de finanzas</h2>
            <p className='descripcion' >proyecto donde ingresas tu datos de ingresos,gastos y ahorros , donde se mustran en graficas o cartas acumando todo esos datos y te da informacion de un balance <br /> <br />  hecho con next,dotenv,postgresql(pg),recharts</p>
            {/* <button className='descripcion-btn' >ir pagina web</button> */}
            <a href="https://github.com/cardozoismael/app-dashboard-finanzas" target='_blank'><button className='descripcion-btn' >ir github</button></a>
            </div>
          </div>
        </div>

        <div className='proyecto-sec2'>
          <div className='proyectos-postman'>


            <div className='proyecto-post'>
                <h2 className='descripcion-titulo'>api de bases de datos postgres con tabla relacionadas</h2>
                <p className='descripcion-post '>hecho con postgresql(pg) , express y helmet</p>
                <a target='_blank' href="https://github.com/cardozoismael/api-con-postgresqlt"> <button className='descripcion-btn btn-post'>ir github</button></a>
              </div>



            <div className='proyecto-post'>
              <h2 className='descripcion-titulo'>api de comentarios de usuarios con authorizacion </h2>
              <p className='descripcion-post'>hecho con jsonwebtoken y express </p>
              <a href="https://github.com/cardozoismael/api-de-comentarios" target='_blank'><button className='descripcion-btn btn-post' >ir github</button></a>
            </div>
          </div>


          <div className='otros-proyectos'>
            <div className='otros'>
              <h2 className='descripcion-titulo'>gestor de tareas</h2>
              <p className="descripcion-otros">crud basico hecho con react</p>
              <a target='_blank' href='https://github.com/cardozoismael/proyecto-de-gestor-de-tareas-avanzado'><button className='descripcion-btn btn-otros' >ir a github</button></a>
            </div>
            <div className='otros'>
              <h2 className='descripcion-titulo'>reservacion de turnos</h2>
              <p className="descripcion-otros">hecho con react</p>
              <a target='_blank' href="https://github.com/cardozoismael/proyecto-reserva-turnos"><button className='descripcion-btn btn-otros'>ir a github</button></a>
            </div>
            <div className='otros'>
              <h2 className='descripcion-titulo'>agregar usuarios</h2>
              <p className="descripcion-otros"> hecho con react</p>
              <a  target="_blank" href="https://github.com/cardozoismael/proyecto-agregar-usuarios-manualmente"><button className='descripcion-btn btn-otros'>ir a github</button></a>
            </div>
            <div className='otros'>
              <h2 className='descripcion-titulo'>app de clima</h2>
              <p className="descripcion-otros">consumo de api hecho con html,css y express </p>
              <a target='_blank' href="https://github.com/cardozoismael/app-de-clima"><button className='descripcion-btn btn-otros'>ir a github</button></a>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div ref={contactoRef} className='conteiner-contacto'>
      <h2 className='titulo-contactos'>contactos</h2>
  <div className='secciones-contactos'>
      <div className='seccion-redes'>
        <h3 className='titulo-misRedes'>mis redes</h3>
        <div className='box-redes'>
        <a className='link-redes'  href="mailto:cardozoismael753@gmail.com?subject=Consulta%20Portafolio&body=Hola,,%20quiero%20más%20información%20sobre%20tu%20trabajo"><img className='img-redes' src="./correo.png" alt="email" /></a>
        </div>
        <div className='box-redes'>
        <a className='link-redes' target='_blank' href="https://wa.me/5491170447390?text=Hola%20quiero%20más%20información"><img className='img-redes' src="./whatsaap.png" alt="whatsaap" /></a>
        </div>
        <div className='box-redes'>
        <a className='link-redes'target='_blank' href="https://github.com/cardozoismael"><img className='img-redes' src="./git.png" alt="git" /></a>
        </div>
        <div className='box-redes'>
        <a className='link-redes' target='_blank' href="https://www.linkedin.com/in/ismael-cardozo-21b3a8364/"><img className='img-redes' src="./in.png" alt="git" /></a>
        </div>
      
      </div>







    
      <div className='seccion-formulario'>
        <h3 className='titulo-mensaje'>enviar un mensaje a travez de la pagina</h3>
        <form className='formulario-Contacto' onSubmit={enviarCorreo} >
          <input  required className='inp' type="text" placeholder='nombre' name='nombre' />
          <input  required className='inp' type="email" placeholder='email' name='email' />
          <textarea required  className='inp textArea' name="mensaje" id="mensaje" placeholder='mensaje' ></textarea>
          <button type='submit' className='inp-button'>enviar</button>
        </form>
      </div>
      </div>
      </div>
      </main>
      
    </>
  )
}

export default App
