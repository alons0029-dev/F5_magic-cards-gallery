
// REACT Components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// REACT-ROUTER-DOM Components
import { RouterProvider } from 'react-router-dom';

// ROUTER 
import { router } from './router/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
