import { useEffect, useRef, useState } from 'react';
import './App.css'

export function MainView() {

    const navItems = ["Perfil", "Proyectos", "Contacto"];
    const highestDivRef = useRef(null);
    const [heightDiv, setHeightDiv] = useState(0);
    useEffect(() => {
        if (highestDivRef.current)
            setHeightDiv(highestDivRef.current.offsetHeight);
    })
    // let [scrolled, setScrolled] = useState(false);

    const nav = navItems.map((item, index) => {
        return <li className='text-white hover:font-bold text-lg p-4 rounded hover:cursor-pointer mr-4 hover:animate-pulse inline' key={index}>{item}</li>

    })



    return (
        <>
            {/* <div className="w-screen h-[7vh] sticky top-0 flex flex-row justify-center">
                <div className="flex flex-row w-5/6 items-center place-content-evenly border-4">
                    <ul className='space-x-12 place-content-between'>
                        {nav}
                    </ul>
                </div>
            </div> */}
            <div className="w-5/6 h-[60vh] mt-24 ml-24 flex flex-col gap-4 items-center z-10 bg-transparent">
                <img src="./cat.jpg" alt="" className='w-48 h-48 rounded-full' />
                <div className="bg-black rounded-full bg-opacity-75 p-6">
                    <h1 className='text-7xl text-white font-Dosis tracking-wide font-bold text-center'>Juan José Gil Calle</h1>
                    <h2 className='text-4xl text-white font-Dosis tracking-wide text-center font-bold'>Ingeniero informático. <br />Tecnologías de la Información</h2>
                    <p className='text-lg text-white font-Dosis tracking-wide text-center'>Ingeniero informático graduado por la Universidad de Cádiz especializado en Tecnologías de la Información. Soy un apasionado de lo que hago y me encuentro en constante aprendizaje. Me considero una persona respetuosa, trabajadora y amigable con buena capacidad de comunicación. Actualmente estoy en búsqueda de nuevas oportunidades para desarrollar mi carrera laboral.</p>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center bg-white mt-16">
                <div className="w-[90vw] mt-16">
                    <h3 className='text-5xl  font-Dosis tracking-widest text-center border-b-2 border-white'>Perfil</h3>
                    <div className="flex flex-row justify-center gap-6 h-[70vh] mt-8">
                        <div className="border-4 w-2/6 flex flex-col p-4" style={{ minHeight: heightDiv }}>
                            <p className='text-3xl text-center mt-3 font-bold font-Dosis'>Formación e idiomas</p>
                            <p className='text-lg font-Dosis m-8 text-center'>Comencé mis estudios superiores estudiando un Bachillerato de Ciencias Tecnológicas en el IES Lola Flores de Jerez, finalizando su curso en el año 2018 obteniendo una nota media de 9.43, matrícula de honor. Ese mismo año empecé a cursar la carrera de Ingeniería Informática en la Universidad de Cádiz, y en junio de 2024 finalicé esta etapa con una nota promedio de 7.28 y habiendo obtenido una nota de 9.5 en mi Proyecto de Fin de Grado.<br />En cuanto a los idiomas, cuento con un nivel nativo de español y con un certificado de B1 de Cambridge que obtuve en 2018 con un resultado de 154 puntos, a pesar de que actualmente mi nivel de inglés se puede encajar en un B2 cercano a un C1.</p>
                        </div>
                        <div className="border-4 w-2/6 flex flex-col h-fit p-4" ref={highestDivRef} style={{ minHeight: heightDiv }}>
                            <p className='text-3xl text-center mt-3 font-bold font-Dosis'>Tecnologías y conocimientos técnicos</p>
                            <p className='text-lg font-Dosis m-8 text-center '>
                                A lo largo de mi carrera he trabajado en diversos proyectos con distintas tecnologías. Principalmente suelo destacar mis conocimientos
                                en Java junto con el uso de Spring Boot, Spring Data, Hibernate, JUnit y Mockito, que junto con un entorno basado en Vue.js, Bootstrap y un despliegue bajo la plataforma de Amazon Web Services con contenedores Docker se conformaría el conjunto de tecnologías que usé para mi Proyecto de Fin de Grado.
                                Dentro de este mismo marco también he trabajado con varios frameworks de PHP, siendo Laravel el que más he implementado en pequeños proyectos de prácticas. Actualmente, dentro del ámbito del desarrollo web me
                                encuentro aprendiendo a desarrollar con React, Tailwind y sigo tratando de pulir mis conocimientos en aquellos lenguajes que ya conozco.<br />
                                En un campo más destinado al desarrollo software he utilizado lenguajes como C++ durante varios años en proyectos de prácticas para crear estructuras de datos que posteriormente serían utilizadas para solventar diferentes clases de problemas. En menor medida he utilizado otros lenguajes como
                                pueden ser Python, en el que pretendo formarme en un futuro próximo, tanto en su vertiente enfocada a la IA como en lo que al desarrollo web respecta. <br />
                            </p>
                            
                        </div>
                        <div className="border-4 w-2/6 flex flex-col p-4" ref={highestDivRef} style={{ minHeight: heightDiv }}>
                            <p className='text-3xl text-center mt-3 font-bold font-Dosis'>Aptitudes y habilidades</p>
                            <p className='text-lg font-Dosis m-8 text-center'>
                                Me considero una persona respetuosa, puntual, organizada y comprometida con el trabajo. Es por ello que me gusta buscar la forma de optimizar lo que estoy haciendo y tratar de que sea lo más eficiente posible. Además,
                                cuento con una buena capacidad de comunicación a la hora de trabajar en equipo, y valoro mucho el buen ambiente laboral. Es por ello que me gusta contribuir en la medida de lo posible para que éste sea lo mejor posible.<br />
                                Por otra parte, considero que cuento con una buena capacidad de aprendizaje, puesto que a lo largo de toda mi carrera he necesitado ser autodidacta en diversas ocasiones, lo que
                                me ha llevado a desarrollar mi habilidad para obtener conocimientos sólidos en poco tiempo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[60vh] border-4 border-black mt-24">
                <div className="grid grid-cols-3 gap-20 justify-items-center mt-16">
                    <div className="w-24 h-24 bg-black"></div>
                    <div className="w-24 h-24 bg-black"></div>
                    <div className="w-24 h-24 bg-black"></div>
                    <div className="w-24 h-24 bg-black"></div>



                </div>
            </div>
        </>
    )
}

