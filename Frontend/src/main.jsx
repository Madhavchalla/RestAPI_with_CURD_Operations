import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Student from './Student'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Student />
  </StrictMode>,
)
