// Library imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//component imports
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
