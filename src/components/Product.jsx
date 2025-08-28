// import { motion } from "framer-motion"
import { FaTags } from "react-icons/fa6";
import { TbShoppingCartCopy } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { PageContext } from "../context/PageContext";
import { useContext } from "react";
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { CgGames } from "react-icons/cg";





import { HOW_IT_WORKS_CONTENT } from "../constants"



const PricingPlans = () => {
    const { selectedColor, setSelectedColor } = useContext(PageContext);

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
        ...prev,
        [index]: !prev[index],
        }));
    };

    const sections = [
        { 
            title: "Shipping Information",
            icon: <TbTruckDelivery className="w-6 h-6" />,
            content: (
                <p className="pb-4">
                    Our standard delivery is 3-8 business days within the United Kingdom, with tracking provided. 
                    Free standard shipping is included, and express shipping is available for $9.99
                </p>
            ) 
        },
        { 
            title: "Console Specs",
            icon: <TbSettings className="w-6 h-6" />,
            content: (
                <ul className="pl-2 pb-4 flex flex-col gap-1">
                    <li>CPU:  <span className="text-xs font-normal text-neutral-400">RK3326 64-bit Quad-Core 1.5GHz</span></li>
                    <li>RAM:  <span className="text-xs font-normal text-neutral-400">1GB DDR3L</span></li>
                    <li>Display:  <span className="text-xs font-normal text-neutral-400">3.5" IPS HD</span></li>
                    <li>GPU:  <span className="text-xs font-normal text-neutral-400">Mali-G31 MP2</span></li>
                    <li>Storage:  <span className="text-xs font-normal text-neutral-400">64GB Internal Memory + Expandable via MicroSD (up to 256GB)</span></li>
                    <li>Battery:  <span className="text-xs font-normal text-neutral-400">3200mAh ~ 12 Hours of Gameplay (per charge)</span></li>
                </ul>
            )
        },
        { 
            title: "Included Games", 
            icon: <CgGames className="w-6 h-6" />,
            content: (
                <div className="pb-4">
                    <p className="">The PlayCore Console comes packed with over 15,000 classic games, spanning decades and genres. 
                        Relive gaming history with legendary titles from a variety consoles, including:
                    </p>
                    <ul className="pl-2 py-2 flex flex-col gap-1">
                        <li className="">🕹️ Capcom Play Systems <span className="text-xs font-normal text-neutral-400">(1, 2, 3)</span></li>
                        <li className="">🕹️ M.A.M.E 2003</li>
                        <li className="">🕹️ PC Engine</li>
                        <li className="">🕹️ Famicon Disk System</li>
                        <li className="">🕹️ Nintendo Systems <span className="text-xs font-normal text-neutral-400">- NES, SNES, N64, Game Boy, Game Boy Color, Game Boy Advance, Nintendo DS</span></li>
                        <li className="">🕹️ Sega Systems <span className="text-xs font-normal text-neutral-400">- Mega Drive, Dreamcast, Game Gear</span></li>
                        <li className="">🕹️ Neo Geo</li>
                        <li className="">🕹️ Sony <span className="text-xs font-normal text-neutral-400">- PlayStation and PSP</span></li>
                    </ul>
                    <p> And many more! Explore a vast library of retro games and discover hidden gems across multiple platforms.
                    </p>
                </div>
            )
        },
    ];


    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut", 
            }
        })
    }

    return (
        <section id="product">
            <div className="max-w-7xl mx-auto px-4 mt-10 mb-0 md:mb-20 lg:mt-20">

                <div className="w-full h-max flex flex-col-reverse justify-start md:flex-row md:items-start md:justify-between md:gap-10 md:relative select-none">
                    <div className="flex flex-col min-w-[40%] md:w-1/3 pb-4 px-4 rounded-xl transition-all duration-300 ease-in-out">
                        <h2 className="hidden md:block mb-6 md:mb-0 text-3xl lg:text-4xl
                            bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                            bg-clip-text text-transparent"
                        >
                            All In One <br />
                            PlayCore Console
                        </h2>
                        <div className="flex flex-wrap items-center space-x-4 my-0 my-6 lg:my-4 md:mb-0">
                            <span className="text-lg font-semibold text-pink-500">$40.00</span>
                            <span className="text-lg font-semibold relative">$80.00 <div className="absolute h-[2px] w-full bg-pink-500 top-1/2 -translate-y-1/2 rotate-12"></div></span>
                            <div className="flex items-center bg-pink-500/20 px-4 py-2 rounded-full font-semibold animate-pulse border border-pink-500/40">
                                <FaTags className="text-pink-500 mr-1 lg:mr-2 text-sm -scale-x-100" />
                                <span className="text-xs lg:text-sm text-pink-500 text-nowrap back">SAVE 50%</span>
                            </div>
                        </div>
                        <ul className="text-sm font-semibold text-neutral-300 space-y-2">
                            <li className="">👾 15,000+ Classic Retro Games</li>
                            <li className="">👾 20+ Legendary Consoles</li>
                            <li className="">👾 Save & Resume Where You Left Off</li>
                            <li className="">👾 12 Hour Battery, No Wi-Fi Required</li>
                        </ul>

                        <div className="w-full flex items-center gap-2 mt-8">
                            {/* <span className="text-xs text-neutral-400">Other Colors:</span> */}
                            <div className="w-full px-0 flex items-center justify-start gap-x-2 gap-y-2 flex-wrap">
                                {HOW_IT_WORKS_CONTENT.steps.map((color, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setSelectedColor(color.code)}
                                        className={`
                                            px-4 py-1
                                            rounded-lg border-2 border-transparent
                                            hover:border-blue-500 transition-all duration-300 ease-in-out
                                            flex-shrink-0
                                            ${selectedColor === color.code ? "border-blue-500" : ""}
                                        `}
                                        style={{ backgroundColor: `${color.color}${selectedColor === color.code ? "80" : "33"}`, border: `2px solid ${color.color}` }}
                                        title={color.imageAlt}
                                    >
                                        <span className="">{color.imageAlt}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className="mt-8 block shiny-border
                            drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
                            text-white py-3 px-5 rounded-lg font-black
                            group text-center relative overflow-hidden"
                            > 
                            <p className="translate-x-0 group-hover:translate-x-full transition-all duration-300 ease-in-out">Buy<span className="text-lg mx-2">{selectedColor}</span>Console</p>
                            <div className="flex items-center gap-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[45rem] group-hover:-translate-x-1/2 transition-all duration-300 ease-in-out">
                                <TbShoppingCartCopy className="size-6" />
                                <span className="text-lg text-nowrap">{selectedColor}</span> 
                            </div>
                        </button>


                        <div className="w-full mt-3">
                            {sections.map((section, index) => (
                                <div key={index} className="">
                                <button
                                    className="w-full flex justify-between items-center py-3 font-semibold group"
                                    onClick={() => toggleSection(index)}
                                >
                                    <span 
                                        className="flex items-center gap-2 group-hover:text-white transition-colors duration-300 ease-in-out"
                                    >
                                        {section.icon} {section.title}
                                    </span>
                                    <span>{openSections[index] ? "−" : "+"}</span>
                                </button>
                                {openSections[index] && (
                                    <div className="p-3 text-gray-300 bg-neutral-900 rounded-lg">{section.content}</div>
                                )}
                                </div>
                            ))}
                        </div>


                        <a href="#fullDetails" className="flex items-center mt-8 md:mt-6 text-xs text-neutral-400 underline hover:text-pink-400 transition-colors duration-300 ease-in-out group">
                            View full details
                            <FaArrowRightLong className="ml-1 group-hover:translate-x-2 transition-transform duration-300 ease-in-out group"/>
                        </a>
                    </div>
                    <div className="md:sticky md:top-0 w-full h-full md:w-2/3 lg:h-auto overflow-hidden">
                        <h2 className="md:hidden block text-center mb-6 md:mb-0 text-3xl lg:text-4xl
                            bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                            bg-clip-text text-transparent"
                        >
                            All In One <br />
                            PlayCore Console
                        </h2>
                        <img 
                            src={HOW_IT_WORKS_CONTENT.steps.find((step) => step.code === selectedColor)?.imageSrc} 
                            alt="blueConsole" 
                            className="w-full h-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default PricingPlans


                {/* <motion.div 
                    className="text-center mb-12  "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                >
                    <h2 className="text-3xl lg:text-5xl
                    bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                    bg-clip-text text-transparent">
                        {PLANS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4">
                        {PLANS_CONTENT.sectionDescription}
                    </p>
                </motion.div> */}

                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.5,
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 "
                >
                    {PLANS_CONTENT.plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            custom={index}
                            variants={childVariants}
                            className={`p-8 rounded-xl shadow-lg bg-neutral-950
                            ${
                                plan.popular 
                                ? "border border-blue-900/80" 
                                : "border-neutral-800"
                            }`}
                        >
                            {plan.popular && (
                                <div className="text-center mb-4">
                                    <span className="bg-blue-600 text-white
                                    text-xs py-1 px-3 rounded-full uppercase">
                                        {PLANS_CONTENT.popularBadge}
                                    </span>
                                </div>
                            )}
                            <h3 className="text-lg lg:text-xl mb-4
                            tracking-tighter uppercase">
                                {plan.name}
                            </h3>
                            <p className="text-neutral-400 mb-6">
                                {plan.description}
                            </p>
                            <div className="text-2xl lg:text-3xl font-medium mb-6">
                                {plan.price}
                            </div>
                            <ul className="mb-8 space-y-2 text-neutral-400">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="inline-block w-2
                                        h-2 bg-neutral-600 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-4 bg-blue-600
                            hover:bg-blue-500 rounded-lg">
                                {PLANS_CONTENT.ctaText}
                            </button>
                        </motion.div>
                    ))}
                </motion.div> */}