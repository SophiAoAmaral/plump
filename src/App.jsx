import { Route, Routes } from "react-router"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./components/Home/Home"
import { Formulação } from "./components/Formulaçao/Formulação"



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulacao" element={<Formulação />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
