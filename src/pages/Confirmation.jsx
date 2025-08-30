import { useContext, useState } from "react"

import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb"
import { IoIosArrowBack } from "react-icons/io";

import { HOW_IT_WORKS_CONTENT } from "../constants"


import { PageContext } from "../context/PageContext"

const Confirmation = () => {
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
              title: "Return Policy",
              icon: <TbTruckReturn className="w-6 h-6" />,
              content: (
                  <p className="pb-4">
                      No worries – if you change your mind, returns are simple and free within 14 days
                  </p>
              )
          },
      ];

  return (
    <section className="h-max bg-black md:bg-[#121212] overflow-y-auto relative ">
      <HashLink smooth to="/#product" className="absolute z-20 top-8 left-5 md:top-8 md:left-10 flex items-center gap-1 select-none">
        <IoIosArrowBack className="w-6 h-6" />
        <p className="">Back</p>
      </HashLink>
      <div className="max-w-7xl mx-auto md:px-4 select-none h-screen flex items-center justify-center">
        <div className="flex flex-col w-full h-full md:h-2/3 bg-black md:bg-[#121212] md:[box-shadow:20px_20px_40px_#0e0e0e,_-20px_-20px_40px_#161616] rounded-none md:rounded-[50px] md:overflow-hidden">

          <div className="w-full h-max md:h-full pb-20 md:pb-0 flex flex-col-reverse md:flex-row items-start relative overflow-auto md:overflow-y-scroll">

            <div className="p-4 md:p-10 flex flex-col min-w-[40%] md:w-1/3 pb-4 rounded-xl transition-all duration-300 ease-in-out">
              <h2 className="text-3xl tracking-wide mb-6 md:mb-10">Order Confirmation</h2>
              {/* Your Selection */}
              <div className="flex flex-col items-start gap-2 md:gap-4 mb-6 md:mb-8">
                <h3 className="text-lg">Your selection</h3>
                <div className="flex items-center gap-2 md:gap-4 flex-wrap lg:flex-nowrap">
                  {/* <div 
                    className="border-2 border-white w-10 h-10 rounded-lg transition-all duration-300 ease-in-out" 
                    style={{  backgroundColor: HOW_IT_WORKS_CONTENT.steps.find((step) => step.code === selectedColor)?.color }}></div> */}
                  <div className="size-24 min-w-max overflow-hidden border-0 border-white rounded-md">
                    <img 
                    src={HOW_IT_WORKS_CONTENT.steps.find((step) => step.code === selectedColor)?.imageSrc} 
                    alt="console" 
                    className="w-full h-full object-cover object-center rounded-xl md:rounded-[50px]" />
                  </div>
                  <div className="w-full flex flex-col items-start gap-1 md:gap-2 text-nowrap">
                    <div className="flex items-center gap-2">
                      <h4 className="text-neutral-400">Product:</h4>
                      <span className="text-base">PlayCore Console</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-neutral-400">Color:</h4>
                      <span className="text-base">{selectedColor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-neutral-400">Quantity:</h4>
                      <span className="text-base">x 1</span>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Refund & Delovery Policy */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg">Refund & Delivery Policy</h3>
                <div className="w-full">
                  {sections.map((section, index) => (
                      <div key={index} className="">
                      <button
                          className="w-full flex justify-between items-center py-2 md:py-3 font-semibold group"
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
                          <div className="p-2 md:p-3 text-gray-300 rounded-lg">{section.content}</div>
                      )}
                      </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              {/* <div className="flex flex-wrap items-center space-x-4 my-0 md:my-6 lg:my-4 md:mb-0">
                  <span className="text-lg font-semibold text-pink-500">$40.00</span>
                  <span className="text-lg font-semibold relative">$80.00 <div className="absolute h-[2px] w-full bg-pink-500 top-1/2 -translate-y-1/2 rotate-12"></div></span>
                  <div className="flex items-center bg-pink-500/20 px-4 py-2 rounded-full font-semibold animate-pulse border border-pink-500/40">
                      <FaTags className="text-pink-500 mr-1 lg:mr-2 text-sm -scale-x-100" />
                      <span className="text-xs lg:text-sm text-pink-500 text-nowrap back">SAVE 50%</span>
                  </div>
              </div> */}

              {/* All Colors */}
              <div className="w-full flex flex-col items-start gap-4 mt-8">
                  <span className="text-xs">Other Colors:</span>
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

              <a href="#"
                  className="mt-8 block shiny-border
                  drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
                  text-white py-3 px-5 rounded-lg font-black
                  group text-center relative overflow-hidden"
                  > 
                  <p className="text-lg">Complete Purchase</p>
              </a>

            </div>

            <div className="w-full h-full rounded-[50px] md:overflow-hidden md:sticky md:top-0">
              <img 
                src={HOW_IT_WORKS_CONTENT.steps.find((step) => step.code === selectedColor)?.imageSrc} 
                alt="console" 
                className="w-full h-full object-cover object-center rounded-xl md:rounded-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Confirmation