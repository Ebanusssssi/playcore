import { motion } from "framer-motion"
import { TESTIMONIALS_CONTENT } from "../constants"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css"; // не забудь стили
import "swiper/css/navigation";


const Testimonials = () => {
    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    return (
        <section id="testimonials">
            <div className="max-w-7xl mx-auto px-4 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    className="text-center md:mb-10"
                >
                    <h2 className="mb-8 text-3xl lg:text-5xl
                    bg-gradient-to-t from-cyan-400 via-neutral-300 to-white
                    bg-clip-text text-transparent"
                    >
                        {TESTIMONIALS_CONTENT.sectionTitle}
                    </h2>
                    {/* <p className="mt-4">
                        {TESTIMONIALS_CONTENT.sectionDescription}
                    </p> */}
                </motion.div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    // navigation={true} // ← вкл стрелки
                    slidesPerView={1}
                    spaceBetween={20}
                    speed={2000} // скорость
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    breakpoints={{
                        764: { // мобильные
                        spaceBetween: 20,
                        slidesPerView: 2,
                        },
                        1024: { // мобильные
                        spaceBetween: 20,
                        slidesPerView: 3,
                        },
                        1501: { // мобильные
                        spaceBetween: 20,
                        slidesPerView: 3,
                        },
                        1701: { // мобильные
                        spaceBetween: 20,
                        slidesPerView: 3,
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
                    className="select-none"
                >
                    {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                        <SwiperSlide
                            key={index}
                            className="md:mt-10 flex flex-col items-start justify-center
                            overflow-hidden rounded-2xl h-[30rem] md:h-[40rem] border-2 border-neutral-800"
                        >
                            <div className="flex flex-col px-4 pt-4 w-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 overflow-hidden rounded-full mr-4">
                                        <img 
                                            src={review.avatar} 
                                            alt={review.alt} 
                                        className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">
                                            {review.name}
                                        </p>
                                        <p className="text-xs font-thin text-white flex items-center gap-[2px]">
                                            {[1,2,3,4,5].map((index) => (
                                                <span key={index} className="">{review.title}</span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-neutral-300 font-thin text-xs tracking-wide">
                                    {review.review}
                                </p>
                            </div>
                            <div className="w-full h-full overflow-hidden">
                                <img src={review.image} alt="review photo" className="w-full h-full object-contain object-center" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials