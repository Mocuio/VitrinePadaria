import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Produtos from './pages/Products/Produtos'
import Promocoes from './pages/Promocoes/Promocoes'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/promocoes" element={<Promocoes />} />
        </Routes>
        </main>
          
    </div>
  )
}
export default App
