import { useEffect, useRef, useState } from 'react';
import './App.css'
import { CardTech } from './CardTech';
import { CardProject } from './CardProject';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import './config/particlesjs-config.json'
import { ParticlesBackground } from './config/ParticlesBackround';
import { TypeAnimation } from 'react-type-animation';



export function MainSec() {

    const aboutMeRef = useRef(null);
    const knowledgeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const allRefs = [aboutMeRef, knowledgeRef, projectsRef, contactRef];

    const navItems = ["Sobre mí", "Conocimientos", "Proyectos", "Contacto"];

    const handleNavigation = (index) => {
        const yOffset = -window.innerHeight * 0.12; // Calcula el 12% de la altura del viewport
        const y = allRefs[index].current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const nav = navItems.map((item, index) => {
        return <li onClick={() =>(handleNavigation(index))} className='hover:font-bold text-xl font-poiret p-4 rounded hover:cursor-pointer mr-4 hover:animate-pulse inline' key={index}>{item}</li>

    })

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible1(true), 500)
        setTimeout(() => setIsVisible2(true), 1000)
        setTimeout(() => setIsVisible3(true), 1500)

    })



    // <CardTech techName="Vue.js" filename="vuejs.svg" progress="80"></CardTech>

    const frontTechs = [
        { techname: 'Vue.js', filename: 'vuejs.svg', progress: '80' },
        { techname: 'React.js', filename: 'reactjs.svg', progress: '45' },
        { techname: 'Bootstrap', filename: 'bootstrap.svg', progress: '75' },
        { techname: 'Tailwind', filename: 'tailwind.svg', progress: '85' },
    ]

    const backTechs = [
        { techname: 'Spring Boot', filename: 'springboot.svg', progress: '85' },
        { techname: 'Mockito', filename: 'mockito.PNG', progress: '70' },
        { techname: 'Laravel', filename: 'laravel.svg', progress: '60' },
    ]

    const softwareTechs = [
        { techname: 'C++', filename: 'C++.svg', progress: '85' },
        { techname: 'Java', filename: 'java.svg', progress: '80' },
        { techname: 'Python', filename: 'python.svg', progress: '35' },
    ]

    const frontCards = frontTechs.map((item, index) => {
        return <CardTech techName={item.techname} filename={item.filename} progress={item.progress}></CardTech>
    })

    const backCards = backTechs.map((item, index) => {
        return <CardTech techName={item.techname} filename={item.filename} progress={item.progress}></CardTech>
    })

    const softwareCards = softwareTechs.map((item, index) => {
        return <CardTech techName={item.techname} filename={item.filename} progress={item.progress}></CardTech>
    })

    // <CardProject projectName="Firelight" description="Hola buenas tarde a todos" techNames={['vuejs', 'java']}></CardProject>

    const projects = [
        { projectName: 'My INE eShop', description: 'Tienda online de venta de móviles de diferentes marcas. Proyecto con énfasis en buenas prácticas backend.', sampleImage: 'INE.png', techNames: ['laravel.svg', 'github.svg'] },
        { projectName: 'Firelight', description: 'Fue mi Proyecto de Fin de Grado. Red social destinada a conocer personas con gustos afines mediante sistema de seguimiento de usuarios, publicaciones y eventos localizados u online.', sampleImage: 'firelight.png', techNames: ['vuejs.svg', 'springboot.svg', 'mockito.PNG', 'github.svg', 'docker.svg', 'aws.svg'] },
        { projectName: 'SantandESI', description: 'Web de banca online con sistema de tarjetas, cuentas y consultas al servicio técnico. Proceso de desarrollo software completo.', sampleImage: 'santandesi.PNG', techNames: ['springboot.svg', 'vaadin.svg', 'github.svg'] },
    ]


    const cardProjects = projects.map((item, key) => {
        return <CardProject projectName={item.projectName} description={item.description} sampleImage={item.sampleImage} techNames={item.techNames}></CardProject>
    })

    const handleCvDownload = () => {
        const link = document.createElement('a');
        link.href = './CV-GilCalleJuanJose.pdf'; // Asegúrate de que esta sea la ruta correcta
        link.download = 'GilCalleJuanJose.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    

    return (
        <>
        <div className="sticky flex flex-row items-center justify-evenly top-0 w-screen h-[12vh] bg-black text-white transition-all ease-linear duration-300 hover:bg-white hover:text-black z-10">
            <ul>
                {nav}
            </ul>
            <button onClick={handleCvDownload} class="transform ease-in-out duration-300 hover:bg-black hover:text-white border rounded-xl font-bold py-2 px-4 inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Descargar CV</span>
            </button>
        </div>
            <div className="flex flex-col bg-indigo-900">
                <ParticlesBackground />
                <div className="flex flex-col items-center" ref={aboutMeRef}>
                    <div className="w-screen h-screen flex flex-col items-center">
                        <div className="w-5/6 mt-20">
                            <img src="./JJ.PNG" alt="" className='w-64 h-64 rounded-full object-contain mx-6 z-10 shadow-2xl' />
                            <h1 className={'font-poiret text-6xl text-white font-bold mt-6 text-start transform transition-all duration-1000 ease-in-out ' + `${isVisible1 ? 'translate-y-0 opacity-100' : '-translate-y-64 opacity-0'}`}>Juan José Gil Calle</h1>
                            <h2 className={'font-poiret text-4xl text-white font-bold mt-6 text-start mx-6 transform transition-all duration-1000 ease-in-out ' + `${isVisible2 ? 'translate-y-0 opacity-100' : '-translate-y-64 opacity-0'}`}>
                            <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Junior backend engineer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Junior software engineer',
                            1000,
                            'Fullstack developer',
                            1000,
                            'Java developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        />
                                </h2>
                            <p className={'font-poiret lg:w-5/6 2xl:w-2/3 text-2xl text-white mt-4 text-start mx-6 transform transition-all duration-1000 ease-in-out ' + `${isVisible3 ? 'translate-x-0 opacity-100' : '-translate-x-64 opacity-0'}`}>Soy un ingeniero informático graduado por la Universidad de Cádiz con mención en Tecnologías de la Información. Estoy centrado en tareas enfocadas al desarrollo de aplicaciones web y al desarrollo software. Me gusta lo que hago y estoy en constante aprendizaje. Actualmente busco oportunidades laborales para crecer profesionalmente.</p>
                        </div>
                    </div>
                    <div className="w-screen bg-black flex justify-center p-4 z-[5]" ref={knowledgeRef}>
                        <ScrollAnimation animateIn='fadeIn' duration={2}>
                            <div className="w-[80vw] pb-8 flex flex-col items-center">
                                <div className="w-5/6 mt-12 flex flex-col items-center">
                                    <h2 className='font-poiret text-4xl text-white font-bold mt-2 text-start mx-6'>Conocimientos</h2>
                                    <p className='font-poiret text-2xl text-white font-extrabold text-start my-6 mx-8'>Frontend</p>
                                    <div className="flex flex-row w-[80vw]">
                                        {frontCards}
                                    </div>
                                    <p className='font-poiret text-2xl text-white font-extrabold text-start my-6 mx-8'>Backend</p>
                                    <div className="flex flex-row w-[80vw]">
                                        {backCards}
                                    </div>
                                    <p className='font-poiret text-2xl text-white font-extrabold text-start my-6 mx-8'>Software</p>
                                    <div className="flex flex-row w-[80vw]">
                                        {softwareCards}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn='fadeIn' duration={2}>
                        <div className="w-[80vw] flex flex-col items-center m-8" ref={projectsRef}>
                            <h2 className='font-poiret text-4xl text-white font-bold mt-6 text-center my-6'>Proyectos destacados</h2>
                            <div className="w-[80vw] flex md:flex-col lg:flex-row items-stretch mt-6 gap-4">
                                {cardProjects}
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="w-screen h-[20vh] mt-16 bg-black flex flex-row border-t z-10" ref={contactRef}>
                        <div className="h-full w-1/3 flex flex-col place-content-center border-r">
                        <a href="https://www.linkedin.com/in/jjgc00/" target='_blank' className='self-center'>
                            <img src="./linkedin1.svg" className='w-12 h-12 hover:animate-pulse hover:cursor-pointer' alt="" />
                        </a>
                            <p className='text-white font-poiret text-xl  text-center'>jjgc00</p>
                        </div>
                        <div className="h-full w-1/3 flex flex-col place-content-center border-r">
                            <img src="./mail.svg" className='w-12 h-12 self-center' alt="" />
                            <p className='text-white font-poiret text-xl text-center'>jjgilca@gmail.com</p>
                        </div>
                        <div className="h-full w-1/3 flex flex-col place-content-center">
                        <a href="https://github.com/juanjo-gc" target='_blank' className='self-center'>
                            <img src="./github3.svg" className='w-12 h-12 self-center hover:animate-pulse hover:cursor-pointer' alt="" />
                        </a>
                            <p className='text-white font-poiret text-xl text-center'>juanjo<span className='font-Dosis'>-</span>gc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
