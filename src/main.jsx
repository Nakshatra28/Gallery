import { StrictMode } from 'react'
import './index.css' 
import './output.css'
import { createRoot } from 'react-dom/client' 

import Youtube from './components/Youtube.jsx'
import Unplash from './components/Unplash.jsx'



createRoot(document.getElementById('root')).render(

    
     // <Youtube/>
     <Unplash/>

)
