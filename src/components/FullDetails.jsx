import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // не забудь стили
import { motion } from "framer-motion"

import console from "../assets/consoleInfo.png";

import pic1 from "../assets/pic_1.png";
import pic2 from "../assets/pic_2.png";
import pic3 from "../assets/pic_3.png";
import pic4 from "../assets/pic_4.png";
import pic5 from "../assets/pic_5.png";
import pic6 from "../assets/pic_6.png";
import pic7 from "../assets/pic_7.png";
import pic8 from "../assets/pic_8.png";
import { KEY_FEATURES_CONTENT } from "../constants";


const FullDetails = () => {
    const pics = [
        pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8
    ]

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

    return (
        <section id="fullDetails">
            <div className="max-w-7xl mx-auto px-4 mt-10">
                <div className="">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        speed={1000} // скорость
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            764: { // мобильные
                            spaceBetween: 20,
                            slidesPerView: 5,
                            },
                            1024: { // мобильные
                            spaceBetween: 20,
                            slidesPerView: 6,
                            },
                            1501: { // мобильные
                            spaceBetween: 20,
                            slidesPerView: 7,
                            },
                            1701: { // мобильные
                            spaceBetween: 20,
                            slidesPerView: 8,
                            },
                        }}
                        watchSlidesProgress={true} // помогает GPU оптимизации
                        onSwiper={(swiper) => {
                            // навешиваем слушатели прямо на контейнер
                            const el = swiper.el
                            el.addEventListener("mouseenter", () => {
                            swiper.autoplay.stop();
                            })
                            el.addEventListener("mouseleave", () => {
                            swiper.autoplay.start();
                            });
                        }}
                    >
                        {pics.map((src, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="p-2 rounded-xl overflow-hidden"  
                            >
                                <img src={src} className="w-full h-full object-cover object-center" /> 
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="w-full flex items-center mt-10">
                        <div className="w-full lg:h-screen overflow-hidden">
                            <img src={console} alt="Console Information" className="w-full h-full object-contain object-center" />
                        </div>
                    </div>
                </div>
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
                    className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-4 lg:gap-6 mt-10 select-none">
                    {KEY_FEATURES_CONTENT.features.map((feature, index) => (
                        <motion.div
                            custom={index}
                            variants={stepVariants}
                            key={index} 
                            className="shiny-border flex flex-col items-center text-center p-4 mb-4 lg:mb-6 rounded-lg overflow-hidden relative"
                        >   
                            <div className="absolute w-[99%] h-[90%] md:w-[99%] md:h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-black rounded-lg"></div>

                            <div className="w-full flex items-center justify-center gap-2 drop-shadow-md mb-2">
                                {feature.icon}
                                <p className="text-lg font-black">{feature.title}</p>
                            </div>
                            <p className="drop-shadow-md">{feature.description}</p>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FullDetails