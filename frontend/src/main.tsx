import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
  </StrictMode>,
)