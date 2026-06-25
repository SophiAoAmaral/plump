import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/Header"
import { useState } from "react"
import { Home } from "./pages/Home/Home"
import { Formulação } from "./pages/Formulaçao/Formulação"
import { ComoUsar } from "./pages/ComoUsar/ComoUsar"
import { Comprar } from "./pages/Comprar/Comprar"
import { Finalizar } from "./components/Finalizar/Finalizar"




function App() {
    const [count, setCount] = useState(0)
  return (
    <>
      <Header count={count} setCount={setCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulacao" element={<Formulação />} />
        <Route path="/uso" element={<ComoUsar/>} />
        <Route path="/comprar" element={<Comprar count={count} setCount={setCount}/> }></Route>
        <Route path="/finalizar" element={<Finalizar count={count} setCount={setCount} />} ></Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
