import React from 'react'
import ReactDOM from 'react-dom/client'
//import { PrimerComponente } from './PrimerComponente'
//import { ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoApp />
  </React.StrictMode>,
)
