import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import KeyFeatures from "../components/KeyFeatures"
import PricingPlans from "../components/PricingPlans"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
        <HeroSection />
        <HowItWorks />
        <KeyFeatures />
        <PricingPlans />
        {/* <Testimonials /> */}
        <Footer />
    </div>
  )
}

export default Home