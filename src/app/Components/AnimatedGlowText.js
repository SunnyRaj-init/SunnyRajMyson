import { motion } from "framer-motion";
const AnimatedGlowText = ({ text, color, size, blur = 5 }) => {
  const glowColor = color || "#ffffff"; // Default to white if no color is provided
  // const textShadow = `0 0 0 px ${glowColor}, 0 0 0 px ${glowColor}, 0 0 0 px ${glowColor}`;
  const textpropsm = `relative text-4xl sm:text-3xl md:text-3xl lg:text-2xl font-bold`; // size is sm
  const textpropmd = `relative text-6xl sm:text-5xl md:text-4xl lg:text-4xl font-bold`; //size is md
  const textproplg = `relative text-8xl sm:text-7xl md:text-6xl lg:text-6xl font-bold`; // size is lg
  const textpropxl = `relative text-9xl sm:text-8xl md:text-8xl lg:text-8xl font-bold`; //render when size is xl
  const textprop = `relative text-base font-bold`; //lesser than sm
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          textShadow: `0 0 0 ${glowColor}, 0 0 0 ${glowColor}, 0 0 ${
            blur * 2
          }px`,
          transition: { duration: 1, ease: "easeInOut" },
        },
        hidden: {
          opacity: 0,
          scale: 0,
          textShadow: `0 0 0 px ${glowColor}, 0 0 0 px ${glowColor}, 0 0 0 px ${glowColor}`,
          transition: { duration: 1, ease: "easeInOut" },
        },
      }}
      className={
        size == "sm"
          ? textpropsm
          : size == "md"
          ? textpropmd
          : size == "lg"
          ? textproplg
          : size == "xl"
          ? textpropxl
          : textprop
      }
      style={{
        color: color,
        fontPalette: "dark",
        fontSmooth: "always",
      }}
    >
      {" "}
      {text}{" "}
    </motion.div>
  );
};
export default AnimatedGlowText;
