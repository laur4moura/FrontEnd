import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import { UsuarioProvider } from './components/context/UsuarioProvider.jsx';  
import { ProdutoProvider } from './components/context/ProdutoProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <ProdutoProvider>
        <App />
      </ProdutoProvider>
    </UsuarioProvider>
  </StrictMode>
)
