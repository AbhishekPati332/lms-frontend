// Library imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//component imports
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
  </StrictMode>,
  </Provider>
)
