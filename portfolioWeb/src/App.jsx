
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './Pages/Portfolio/Portfolio'
import KalRes from './Pages/KalkulatorResistor/KalRes'
import Cafe from './Pages/Cafe/Cafe'


function App() {


  return (
    <>

  <Router>
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/kalres" element={<KalRes />} />
    <Route path="/cafe" element={<Cafe/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
</Router>
 
    </>
  )
}

export default App
