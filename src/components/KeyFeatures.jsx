import { motion } from "framer-motion"
import { KEY_FEATURES_CONTENT } from "../constants"
import gif1 from "../assets/gif_1.gif";
import gif2 from "../assets/gif_2.gif";
import gif3 from "../assets/gif_3.gif";
import gif4 from "../assets/gif_4.gif";
import gif5 from "../assets/gif_5.gif";
import gif6 from "../assets/gif_6.gif";
import gif7 from "../assets/gif_7.gif";
// import gif8 from "../assets/gif_8.gif";
// import gif1 from "../assets/gif_1.gif";

const KeyFeatures = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                // when: "beforeChildren",  
            }
        }
    }

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            }
        }
    }

    const gifs = [
        gif1,gif2,gif3,gif4,gif5,gif6,gif7
    ]
    return (
        <section className="">
            <div className="max-w-7xl mx-auto px-4 my-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}div className="text-center mb-12 border-t border-neutral-800">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter
                    bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                    bg-clip-text text-transparent">
                        {KEY_FEATURES_CONTENT.sectionTitle}
                    </h2>
                    {/* <p className="mt-4">
                        {KEY_FEATURES_CONTENT.sectionDescription}
                    </p> */}
                </motion.div>
                    
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-wrap justify-between"
                >
                    <div className="overflow-hidden relative w-full">
                        {/* Левый градиент */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-32 
                                        bg-gradient-to-r from-black to-transparent z-10" />

                        {/* Правый градиент */}
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-32 
                                        bg-gradient-to-l from-black to-transparent z-10" />

                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                            className="flex"
                        >
                            {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex">
                                {gifs.map((src, idx) => (
                                <motion.div 
                                    variants={featureVariants}
                                    className="w-60 h-52 md:w-96 md:h-80 overflow-hidden rounded-xl mx-2">
                                    <img 
                                    key={`${i}-${idx}`} 
                                    src={src} 
                                    alt={`gif-${idx}`} 
                                    className="w-full h-full object-cover object-center"
                                />
                                </motion.div>
                                ))}
                            </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
                {/* <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-wrap justify-between"
                >
                    {KEY_FEATURES_CONTENT.features.map((feature, index) => (
                        <motion.div
                            variants={featureVariants}
                            key={feature.id} 
                            className="flex flex-col items-center
                            text-center w-full md:w-1/2 lg:w-1/3 p-6"
                            >

                            <div className="flex justify-center items-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-neutral-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    )
}

export default KeyFeatures