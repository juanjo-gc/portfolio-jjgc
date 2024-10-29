import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[40vh] w-5/6 mt-24 ml-24">
        <h1 className='text-8xl text-white font-Dosis tracking-widest'>Juan José <span className='block ml-32'>Gil Calle</span></h1>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="w-[90vw] w-screen">
          <h2 className='text-4xl text-white font-Dosis tracking-widest text-start border-b-2 border-white'>¡Hola!</h2>
          <p className='text-lg text-white font-Dosis tracking-wide m-6'>Me llamo Juan José, y he estudiado la carrera de Ingeniería Informática. Me encuentro especializado en Tecnologías de la Información, y soy un apasionado de lo que hago. Me considero una persona respetuosa, honesta y comprometida, y estoy en constante aprendizaje, formándome en nuevas tecnologías y deseando buscar nuevas oportunidades de trabajo.</p>
        </div>
        <div className="w-screen w-[90vw]">
          <h2 className='text-4xl text-white font-Dosis tracking-widest text-end border-b-2 border-white'>Conocimientos técnicos</h2>
          <div className="grid grid-cols-3 mt-6 justify-items-center gap-5">
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/java.svg" alt="" className='rounded-full object-cover' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/spring-boot.png" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/C++.svg" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/html.png" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/css.webp" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/js.png" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/vuejs.png" alt="" className='rounded-full object-contain' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/docker.jpg" alt="" className='rounded-full' />
            </div>
            <div className="bg-white rounded-full w-32 h-32">
              <img src="./public/java.svg" alt="" className='rounded-full object-contain' />
            </div>
          </div>
        </div>
        <div className="bg-black w-screen h-[40vh] w-[90vw]"></div>
      </div>


    </>
  )

  // return (
  //   <>
  //     <div className='border-solid'>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)} className='btn-azul'>
  //         Count is <strong>{count}</strong>
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
