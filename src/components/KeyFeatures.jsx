import { motion } from "framer-motion"
import { KEY_FEATURES_CONTENT } from "../constants"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode  } from "swiper/modules";
import "swiper/css"; // не забудь стили

import gif1 from "../assets/gif_1.mp4";
import gif2 from "../assets/gif_2.mp4";
import gif3 from "../assets/gif_3.mp4";
import gif4 from "../assets/gif_4.mp4";
import gif5 from "../assets/gif_5.mp4";
import gif6 from "../assets/gif_6.mp4";
import gif7 from "../assets/gif_7.mp4";
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
        gif1,gif2,gif3,gif4,gif5,gif6,gif7,gif4
    ]
    return (
        <section className="">
            <div className=" px-4 mb-10 mt-0 md:mt-20 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}} 
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-5xl
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

                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}
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
                                slidesPerView: 3,
                                },
                                1024: { // мобильные
                                spaceBetween: 20,
                                slidesPerView: 5,
                                },
                                1501: { // мобильные
                                spaceBetween: 20,
                                slidesPerView: 6,
                                },
                                1701: { // мобильные
                                spaceBetween: 20,
                                slidesPerView: 7,
                                },
                            }}
                            watchSlidesProgress={true} // помогает GPU оптимизации
                            onSwiper={(swiper) => {
                            // навешиваем слушатели прямо на контейнер
                            const el = swiper.el;

                            el.addEventListener("mouseenter", () => {
                            swiper.autoplay.stop();
                            });

                            el.addEventListener("mouseleave", () => {
                            swiper.autoplay.start();
                            });
                        }}
                        >
                            {gifs.map((src, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="rounded-xl overflow-hidden"  
                            >
                                <video 
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover object-center" /> 
                                 
                            </SwiperSlide>
                            ))}
                        </Swiper>
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