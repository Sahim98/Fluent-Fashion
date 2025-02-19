import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthContext from './components/Contexts/AuthContext.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthContext>
        <RouterProvider router={router}/>
        <Toaster />
      </AuthContext>
  </StrictMode>,
)
