import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedCounter = ({ from = 0, to = 100, duration = 2 }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      value: to,
      transition: { duration: duration, ease: "easeOut" },
    });
  }, [controls, to, duration]);

  return (
    <motion.span initial={{ value: from }} animate={controls}>
      {controls.current?.value?.toFixed(0)}
    </motion.span>
  );
};

export default AnimatedCounter;
