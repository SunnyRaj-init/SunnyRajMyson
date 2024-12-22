import { motion } from "framer-motion";
const AnimatedText = ({ text, size, color }) => {
  const glowColor = color || "#ffffff"; // Default to white if no color is provided
  const textShadow = `0 0 0px ${glowColor}, 0 0 0px ${glowColor}, 0 0 0px ${glowColor}`;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0,
        textShadow,
      }}
      animate={{
        opacity: 1,
        y: 0,
        textShadow: `0 0 1vw ${glowColor}, 0 0 0vw ${glowColor}, 0 0 0vw ${glowColor}`,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="animated-text"
      style={{
        fontSize: `${size}vw`,
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
export default AnimatedText;
