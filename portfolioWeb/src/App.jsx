
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './Pages/Portfolio/Portfolio'
import KalRes from './Pages/KalkulatorResistor/KalRes'


function App() {


  return (
    <>

  <Router>
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/kalres" element={<KalRes />} />
  </Routes>
</Router>
 
    </>
  )
}

export default App
