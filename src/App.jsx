import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Confirmation from "./pages/Confirmation"
import SuccessPage from "./pages/SuccessPage"

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/confirmation" element={ <Confirmation /> }/>
        <Route path="/success" element={ <SuccessPage /> }/>
      </Routes>
    </main>
  )
}

export default App