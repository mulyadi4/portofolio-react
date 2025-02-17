
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Portfolio from './Pages/Portfolio/Portfolio'
import KalRes from './Pages/KalkulatorResistor/KalRes'


function App() {


  return (
    <>
 <BrowserRouter>
 <Routes>

  <Route path="/" element={<Portfolio/>} />
  <Route path="/kalres" element={<KalRes/>} />

 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
