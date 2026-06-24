import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./components/Home/Home"
import { Formulação } from "./components/Formulaçao/Formulação"
import { ComoUsar } from "./components/ComoUsar/ComoUsar"



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulacao" element={<Formulação />} />
        <Route path="/uso" element={<ComoUsar/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
