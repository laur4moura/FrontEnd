
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFrutasPage from './components/cadastrofrutas/cadastrofrutaspage'
import Header from './components/header/header'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  element={<HomePage/>} path="/" />
      <Route  element={<QuemSomosPage/>}path="/quemsomos" />
      <Route  element={<CadastroFrutasPage/>}path="/cadastrofrutas" />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
