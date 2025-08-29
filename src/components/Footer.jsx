import { TbShoppingCartCopy } from "react-icons/tb"
import { FOOTER_CONTENT } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-center items-center">
                {FOOTER_CONTENT.sections.map((section, index) => (
                    <div key={index} className="w-full flex flex-col items-center">
                        <h3 className="text-xl lg:text-3xl
                            bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                            bg-clip-text text-transparent mb-4 hidden md:block">
                            {section.title}
                        </h3>
                        <ul className="w-full flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-center justify-between flex-wrap">
                            <a href="#header" className="text-xl md:text-2xl text-white select-none">
                                <span className="[text-shadow:2px_2px_0px_#22d3ee]">Play</span>
                                <span className="[text-shadow:2px_2px_0px_#22d3ee]">Core</span>
                            </a>
                            <div className="flex items-center justify-center flex-wrap gap-10">
                                {section.links.map((link, index) => (
                                    <li key={index} className="hover:text-neutral-200 transition-colors">
                                        <a href={link.url}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </div>
                            <a href="#product" className=" text-white py-2 px-4 rounded-lg shiny-border transition-all duration-300 ease-in-out group">
                                <span className="select-none flex items-center gap-2">
                                    Shop Now
                                    <TbShoppingCartCopy className="-translate-x-5 opacity-0 size-0 group-hover:size-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                                </span>
                            </a>
                        </ul>
                    </div>
                ))}
            </div>     

            <div className="my-12 pt-8
            text-center text-sm text-white select-none">
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center justify-center gap-2">
                        {FOOTER_CONTENT.paymentMethods.map((method, index) =>(
                            <div key={index} className="w-10 overflow-hidden">
                                <img src={method} alt="payment-method" className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                    <div className="text-xs">
                        <p className="text-neutral-400 px-2 w-max">{FOOTER_CONTENT.copyrightText}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer