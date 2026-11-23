
import Navbar from './Components/Navbar'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App



