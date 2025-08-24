import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Faq from "./pages/Faq"
import GameList from "./pages/GameList"
import Navbar from "./components/Navbar"
import Header from "./components/Header"

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/product" element={ <Product /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/faq" element={ <Faq /> }/>
        <Route path="/gamelist" element={ <GameList /> }/>
      </Routes>
    </main>
  )
}

export default App