import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mainpage from './components/Mainpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Mainpage/>
  </StrictMode>,
)
