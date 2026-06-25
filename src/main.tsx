import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DeumanSolutionApp } from './app/DeumanSolutionApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeumanSolutionApp />
  </StrictMode>,
)
