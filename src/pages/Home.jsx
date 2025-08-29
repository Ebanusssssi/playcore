import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import PickYours from "../components/PickYours"
import GamesShowCase from "../components/GamesShowCase"
import Product from "../components/Product"
import Testimonials from "../components/Testimonials"
import FullDetails from "../components/FullDetails"
import { useContext } from "react"
import { PageContext } from "../context/PageContext"

const Home = () => {
  const { isOpen, setIsOpen } = useContext(PageContext);

  return (
    <div onClick={() => setIsOpen(false)}>
        <HeroSection />
        <PickYours />
        <GamesShowCase />
        <Product />
        <Testimonials />
        <FullDetails />
        <Footer />
    </div>
  )
}

export default Home