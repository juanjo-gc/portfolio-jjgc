import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainView } from './MainView.jsx'
import { MainSec } from './MainSec.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MainView /> */}
    <MainSec></MainSec>
  </StrictMode>,
)
