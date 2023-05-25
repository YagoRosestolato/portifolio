import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Projeto from './components/Projetos.tsx'
import Tecnologia from './components/Tecnologia.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Projeto />
    <Tecnologia />
  </React.StrictMode>,
)
