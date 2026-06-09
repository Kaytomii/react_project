import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Card} from "./components/Card.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Card></Card>
      <App />
  </StrictMode>,
)
