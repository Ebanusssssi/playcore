import { useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { TbShoppingCartCopy } from "react-icons/tb";
import { Link } from "react-router-dom";



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
                <Link to="/" className="text-xl md:text-2xl text-white select-none">
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Play</span>
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Core</span>
                </Link>

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 ">
                    <Link to="/product" className="hover:text-neutral-200 transition-colors">
                        Product
                    </Link>
                    <Link to="/contact" className="hover:text-neutral-200 transition-colors">
                        Contact
                    </Link>
                    <Link to="/about" className="hover:text-neutral-200 transition-colors">
                        About Us
                    </Link>
                    <Link to="/faq" className="hover:text-neutral-200 transition-colors">
                        FAQ's
                    </Link>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Link to="/gamelist" className="border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                        Full Game List
                    </Link>
                    <Link to="/product" className=" text-white py-2 px-4 rounded-lg shiny-border transition-all duration-300 ease-in-out group">
                        <span className="select-none flex items-center gap-2">
                            Shop Now
                            <TbShoppingCartCopy className="-translate-x-5 opacity-0 size-0 group-hover:size-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                        </span>
                    </Link>
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
                        <a href="#" className="py-2 px-4 shiny-border text-white rounded-lg transition-all duration-300 ease-in-out group">
                            <span className="select-none flex items-center justify-between gap-2">
                                Shop Now
                                <TbShoppingCartCopy className="-translate-x-5 opacity-0 size-0 group-hover:size-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar