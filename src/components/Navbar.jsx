import { useState, useEffect, useContext } from "react"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { TbShoppingCartCopy } from "react-icons/tb";
import { PageContext } from "../context/PageContext";

const debounce = (func, wait = 10) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(PageContext);

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = debounce(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // скроллим вниз
            setVisible(false);
        } else {
            // скроллим вверх
            setVisible(true);
        }

        setLastScrollY(currentScrollY);
        }, 10); // debounce 100ms

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    // fixed top-10 left-0 right-0 z-50 m-2
    
    return (
        <nav 
            onClick={e => e.stopPropagation()}
            className={`fixed top-6 md:top-10 left-0 w-full p-4 transition-transform duration-300 z-50 ${
            visible ? "translate-y-0" : "-translate-y-[130%]"
            }`}
        >
            <div className="text-neutral-500 bg-black/50 backdrop-blur-sm max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* left: logo */}
                {/* <img src={logo} alt="logo" width={120} height={24} className="cursor-pointer"/> */}
                <a href="#header" className="text-xl md:text-2xl text-white select-none">
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Play</span>
                    <span className="[text-shadow:2px_2px_0px_#22d3ee]">Core</span>
                </a>

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 ">
                    <a href="#product" className="hover:text-neutral-200 transition-colors">
                        Product
                    </a>
                    <a href="#gallery" className="hover:text-neutral-200 transition-colors">
                        Colors
                    </a>
                    <a href="#fullDetails" className="hover:text-neutral-200 transition-colors">
                        Details
                    </a>
                    <a href="#testimonials" className="hover:text-neutral-200 transition-colors">
                        Reviews
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    {/* <Link to="/gamelist" className="border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                        Full Game List
                    </Link> */}
                    <a href="#product" className=" text-white py-2 px-4 rounded-lg shiny-border transition-all duration-300 ease-in-out group">
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
                        <a href="#product" className="hover:text-neutral-200 transition-colors" onClick={() => setIsOpen(false)}>
                            Product
                        </a>
                        <a href="#gallery" className="hover:text-neutral-200 transition-colors" onClick={() => setIsOpen(false)}>
                            Colors
                        </a>
                        <a href="#fullDetails" className="hover:text-neutral-200 transition-colors" onClick={() => setIsOpen(false)}>
                            Details
                        </a>
                        <a href="#testimonials" className="hover:text-neutral-200 transition-colors" onClick={() => setIsOpen(false)}>
                            Reviews
                        </a>
                        <a href="#product" className="py-2 px-4 shiny-border text-white rounded-lg transition-all duration-300 ease-in-out group" onClick={() => setIsOpen(false)}>
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