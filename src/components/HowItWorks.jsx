
import { motion } from "framer-motion"
import { HOW_IT_WORKS_CONTENT } from "../constants"
import { Link } from "react-router-dom"
import { TbShoppingCartCopy } from "react-icons/tb";


const HowItWorks = () => {
    const stepVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (i + 0.2) * 0.2,
                duration: 0.6,
                ease: "easeOut",
            }
        })
    }
    return(
        <section id="works">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl
                    bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                    bg-clip-text text-transparent">
                        {HOW_IT_WORKS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        {HOW_IT_WORKS_CONTENT.sectionDescription}
                    </p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}

                    // #1 PINTEREST-COLUMNS-LAYOUT
                    className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-4 lg:gap-6">
                    {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                        <motion.div
                            custom={index}
                            variants={stepVariants}
                            key={index} 
                            className="p-6 rounded-xl shadow-lg 
                            flex flex-col items-center justify-between break-inside-avoid mb-4 md:mb-4 lg:mb-6 select-none relative">
                            <Link to="/product" className="w-full h-full group">
                                <div
                                    className="absolute inset-0 flex items-center justify-center z-20 group-hover:bg-black/30
                                    drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
                                    text-white py-3 px-5 rounded-lg font-black transition-all duration-300 ease-in-out"
                                >
                                    <span className="opacity-0 -translate-x-5
                                            group-hover:opacity-100 group-hover:translate-x-0
                                            transition-all duration-300 ease-in-out select-none flex justify-center items-center gap-2">
                                        Explore
                                        <TbShoppingCartCopy 
                                            className="size-5 " 
                                        />
                                    </span>
                                </div>
                                <img 
                                    src={step.imageSrc} 
                                    alt={step.imageAlt} 
                                    className="rounded-lg w-full object-cover object-center group-hover:saturate-100 transition-all duration-300 ease-in-out"
                                />
                            </Link>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorks