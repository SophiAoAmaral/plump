import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./components/Home/Home"
import { Formulação } from "./components/Formulaçao/Formulação"
import { ComoUsar } from "./components/ComoUsar/ComoUsar"
import { Comprar } from "./components/Comprar/Comprar"
import { useState } from "react"



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
      </Routes>

      <Footer/>
    </>
  )
}

export default App
