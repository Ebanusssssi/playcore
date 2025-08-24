import { useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { TbShoppingCartCopy } from "react-icons/tb";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="fixed top-10 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/50 backdrop-blur-sm max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* left: logo */}
                {/* <img src={logo} alt="logo" width={120} height={24} className="cursor-pointer"/> */}
                <div className="text-2xl text-white ">
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Play</span>
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Core</span>
                </div>

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 ">
                    <a href="#works" className="hover:text-neutral-200 transition-colors">
                        Product
                    </a>
                    <a href="#works" className="hover:text-neutral-200 transition-colors">
                        Contact
                    </a>
                    <a href="#pricing" className="hover:text-neutral-200 transition-colors">
                        About Us
                    </a>
                    <a href="#testimonials" className="hover:text-neutral-200 transition-colors">
                        FAQ's
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                        Full Game List
                    </a>
                    <a href="#" className=" text-white py-2 px-4 rounded-lg shiny-border transition-all duration-300 ease-in-out group">
                        <span className="select-none flex items-center gap-2">
                            Shop Now
                            <TbShoppingCartCopy className="-translate-x-5 opacity-0 size-0 group-hover:size-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                        </span>
                    </a>
                </div>

                {/* Hamburder Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} 
                            className="text-white focus:outline-none" 
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                            { isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900/60 backdrop-blur-md 
                border border-neutral-800 p-4 rounded-xl mt-2">
                    <div className="flex flex-col space-y-4 ">
                        <a href="#works" className="hover:text-neutral-200 transition">
                            Product
                        </a>
                        <a href="#works" className="hover:text-neutral-200 transition">
                            Contact
                        </a>
                        <a href="#pricing" className="hover:text-neutral-200 transition">
                            About Us
                        </a>
                        <a href="#" className="hover:text-neutral-200 transition">
                            FAQ's
                        </a>
                        <a href="#" className="py-2 px-4 border border-white/20 bg-white/0 hover:bg-white/10 text-white rounded-lg  transition-colors duration-300 ease-in-out">
                            Full Game List
                        </a>
                        <a href="#" className="shiny-border bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                            Shop Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar