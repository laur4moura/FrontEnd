import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Produto from './components/produto/produto'
import CadastroProduto from './components/cadastrarProduto/CadastarProduto'
import ListarProduto from './components/listarproduto/ListarProduto'
import PrivateRoute from './routes/PrivateRoute'

import './app.css'

export function App() {
  

  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"
       element=
       {
          <Home />
        } />

      <Route path="/perfil"
       element=
       {
          <Perfil />
        } />

      <Route path="/produto"
       element=
      {<PrivateRoute>
          <Produto />
        </PrivateRoute>

      } />
      <Route path="/cadastro-produto" 
      element=
      {
        <PrivateRoute>
          <CadastroProduto />
        </PrivateRoute>
      }
      />
      <Route path="/listar-produto" 
      element=
      {<PrivateRoute>
          <ListarProduto />
        </PrivateRoute>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App