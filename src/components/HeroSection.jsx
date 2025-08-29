import { BRAND_LOGOS, HERO_CONTENT } from "../constants"
// import heroImage from "../assets/hero.jpg"
import heroBg from "../assets/allConsolesPic.webp"
import { motion } from "framer-motion"
import { TbShoppingCartCopy } from "react-icons/tb";
import { Link } from "react-router-dom";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { straggerChildren: 0.2 }},
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}, 
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 }},
}


const HeroSection = () => {
    return (
        <motion.section
        id="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-28 md:pt-28 lg:pt-36 h-[70vh] md:h-[85vh] relative">

            <div className="absolute -top-0 left-1/2 -translate-x-1/2 -z-20 w-full h-[120%] lg:w-3/4 md:h-[120%] flex items-center justify-center select-none">
                <img src={heroBg} alt="" className="h-full md:h-auto w-full object-cover object-center opacity-50 select-none"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center ">
                <motion.div 
                variants={fadeInUp}
                className="md:mt-8 mb-0 px-3 py-2 rounded-full text-white text-nowrap text-[10px] md:text-xs md:text-wrap font-semibold tracking-wide drop-shadow-[0_0_5px_rgba(0,0,0,1)] select-none">
                    {HERO_CONTENT.badgeText}
                </motion.div>
                {/* text-2xl md:text-5xl lg:text-8xl */}
                <motion.h1 
                variants={fadeInUp}
                className="my-4 md:my-4 text-[6.9vw] md:text-[5vw] leading-[1.05]
                tracking text-nowrap  drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] text-white select-none">
                    All Your <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-[length:300%_300%]
             bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-gradient">Favorite Games</span> <br />
                    One <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-[length:300%_300%]
             bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-gradient">Epic Console</span>
                </motion.h1>
                


                <motion.p 
                variants={fadeInUp}
                className="text-[10px] leading-normal md:text-sm md:mt-6 text-white max-w-xl font-semibold tracking-wide drop-shadow-[0_0_5px_rgba(0,0,0,1)] select-none">
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div 
                variants={fadeInUp}
                className="mt-6 space-x-4">
                    <a href="#product"
                    className="inline-block shiny-border
                    drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
                    text-white py-3 px-5 rounded-lg font-black
                    group"
                    >
                        <span className="select-none flex items-center gap-2">
                            {HERO_CONTENT.callToAction.primary} 
                            <TbShoppingCartCopy className="-translate-x-5 opacity-0 size-0 group-hover:size-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                        </span>
                    </a>
                    {/* <a href="#" 
                    className="inline-block border border-white/20 bg-white/0 hover:bg-white/10
                    text-white py-3 px-5 rounded-lg font-black transition-all duration-300 ease-in-out"
                    >
                        <span className="select-none">{HERO_CONTENT.callToAction.secondary}</span>
                    </a> */}
                </motion.div>

                {/* <motion.div 
                variants={fadeIn}
                className="py-10">
                    <p className="text-gray-400 text-center mb-8">
                        {HERO_CONTENT.trustedByText}
                    </p>
                    <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-8">
                        {BRAND_LOGOS.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="h-8"/>
                        ))}
                    </motion.div>
                </motion.div> */}

                {/* <motion.div 
                variants={fadeIn}
                className="mt-12">
                    <img 
                        src={heroImage} 
                        alt="Streamer SaaS Interface" 
                        className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"/>
                </motion.div> */}
            </div>
        </motion.section>
    )
}

export default HeroSection