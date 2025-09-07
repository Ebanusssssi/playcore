import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import confetti from "canvas-confetti";

const SuccessPage = () => {
  const [copied, setCopied] = useState(false);
  const promo = "X7M2P9KQ4ZLF"
  const canvasRef = useRef(null);

  //Copy the promo-code
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promo);
      setCopied(true);
      
      setTimeout(() => setCopied(false), 2000); // сброс через 2 сек
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };   

  //Confetti
  useEffect(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true, // canvas автоматически подстраивается под размер экрана
      useWorker: true,
    });

    // Запускаем "софиты" при загрузке
    myConfetti({
      particleCount: 50,
      spread: 120,
      origin: { y: 0.2 }, // сверху
      colors: ["#ec4899", "#22d3ee", "#ffffff"],
    });

    // Дополнительно запускаем "волнами"
    const interval = setInterval(() => {
      myConfetti({
        particleCount: 50,
        spread: 80,
        origin: { x: Math.random(), y: 0 }, // случайная точка сверху
        colors: ["#ec4899", "#22d3ee", "#ffffff"],
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Canvas для конфетти */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
      />

      {/* Иконка успеха */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="mb-6 rounded-full flex items-center justify-center"
      >
        <MdOutlineTaskAlt  className="text-4xl md:text-8xl text-green-400" />
      </motion.div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center select-none"
      >
        <span className="leading-normal select-none">Thanks for your Order!</span> 
        <br />
        <span className="select-none">
          We appreciate you choosing <span className="font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-[length:300%_300%]
             bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-gradient">PlayCore!</span>
        </span>
      </motion.h1>

      {/* Текст */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-center text-neutral-300 max-w-xl select-none"
      >
        Your order has been successfully placed.
        We’re processing it right now, you’ll receive a confirmation email shortly with all the details.
      </motion.p>

      {/* Промо-код */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, width: "30%" }}
        animate={{ scale: 1, opacity: 1, width: "100%" }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 p-1 h-max w-full rounded-lg text-center shiny-border"
      >
        <div className="p-6 bg-black rounded-xl w-max h-full justify-self-center border-2 border-dashed border-cyan-400">
            <h2 className="text-lg font-semibold mb-2 drop-shadow-lg select-none">
            Here’s a special gift for your next purchase!
            </h2>
            <div 
                title="Click to copy"
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 font-black tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-[length:300%_300%]
                bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] animate-gradient select-none cursor-pointer"
            >
                <span className="text-3xl inline-block">{promo}</span>
                { copied 
                    ? <IoCheckmarkDone  className="text-xl inline-block text-green-400 " />
                    : <IoCopy className="text-base inline-block text-neutral-300" />
                }
            </div>
            <p className="mt-2 text-sm select-none text-neutral-600">
            Use the promo code to get your next order.{" "}
            <span className="text-cyan-400">10% OFF</span>
            </p>
        </div>
      </motion.div>

      {/* Кнопка на главную */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link
          to="/"
          className="mt-10 inline-block px-8 py-3 rounded-xl text-lg shiny-border select-none"
        >
          Back to PlayCore
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
