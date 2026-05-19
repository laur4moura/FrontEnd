import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFrutas from './components/cadastrofrutas/cadastrofrutaspage'
import { ProdutosPage } from './components/produtos/produtospage'
import Header from './components/header/header'

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuemSomosPage />} path="/quemsomos" />
          <Route element={<CadastroFrutas />} path="/cadastrofrutas" />
          <Route element={<ProdutosPage />} path="/produtos" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App