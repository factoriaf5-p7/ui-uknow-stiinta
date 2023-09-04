import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroImgProps {
  showHeroImage: boolean;
  setShowHeroImage: (show: boolean) => void;
}

function HeroImg({ showHeroImage, setShowHeroImage }: HeroImgProps) {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [showDelayedButton, setShowDelayedButton] = useState(false);

  const handleButtonClick = () => {
    setShowHeroImage(false);
    navigate("/home");
  };

  const handleImageLoad = () => {
    setShowDelayedButton(true);
  };

  useEffect(() => {
    if (showDelayedButton) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [showDelayedButton]);

  return (
    <div className="flex flex-col lg:flex-row items-center bg-background h-screen">
      <div className="p-6 lg:self-start">
        <img  className='m-auto' src="logo.svg" alt="logo" />
      </div>
      {showHeroImage && (
        <motion.div
          initial={{ scale: 0.8, rotate: 0, borderRadius: "0%" }}
          animate={{
            scale: [0.8, 1.1, 1, 1],
            rotate: [0, 0, 0, 0],
            borderRadius: ["25%", "25%", "25%", "25%"],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="p-6 lg:w-1/2"
        >
          <img src="hero.png" className="h-full flex justify-center " alt="" onLoad={handleImageLoad} />
        </motion.div>
      )}
      {showButton && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="p-6 lg:w-1/2 "
        >
          <h1 className="text-3xl mt-5 font-medium text-center lg:text-right">
            Choose your <br />
            <span className="text-orange-500 ">
              Learning{" "}
            </span>
            path
          </h1>
          <h6 className="mt-4 text-center lg:text-right text-hero ">
            Explore all the most exciting job roles based <br /> on your
            interest and study major.
          </h6>
          <div className="lg:flex lg:justify-end mt-4 flex justify-end ">
            <button onClick={handleButtonClick} className="  animate-pulse bg-btnOscuro hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Continue →
             </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default HeroImg;
