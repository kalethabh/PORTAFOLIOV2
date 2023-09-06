import logo from '../../public/favicon.ico'
import SlideSkill from './SlideSkill.jsx'

export default function Portafolio() {
    const projects = [
        {

        },
        {

        },
        {

        },
]
  return (
    <div className='px-[27rem]'>
        <nav >
            <ul className='flex justify-between items-center top-0 p-4'>
                <img src={logo} alt="logo" />
                <div className='flex space-x-4'>
                    <li><a href="">Github</a></li>
                    <li><a href="">Linkedin</a></li>
                </div>
            </ul>
        </nav>
        <div className='px-4 py-10'>
            <h1 class="text-3xl font-bold">Hola, Soy <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Kaleth</span> 👋</h1>
            <p class="mt-6 text-xl leading-9 w-[40rem]">Saludos! 👋 Me entusiasma profundamente el arte de crear soluciones tecnológicas integrales. Mi foco principal se centra en el Desarrollo Web Full Stack, una disciplina que abarca tanto el diseño de interfaces atractivas y funcionales mediante el uso de herramientas como HTML, CSS y JavaScript, como la construcción de aplicaciones interactivas y escalables utilizando tecnologías avanzadas como React, Redux, NodeJS y Express. También me siento cómodo trabajando con bases de datos como PostgreSQL y Sequelize para garantizar una gestión eficiente de la información. Sí te intereza mi perfil aquí te dejo mi CV para que le eches un vistazo, no dudes en contactarme!.
            
            </p>
            <button className='py-4'>
                <a className='border p-2 rounded-md bg-slate-400 ml-2 bg-gradient-to-br from-sky-500 to-cyan-400 text-sm font-medium hover:from-sky-700 hover:to-cyan-600' href="">Descargar CV</a>
            </button>
        </div>
        <SlideSkill/>
    </div>
  )
}
