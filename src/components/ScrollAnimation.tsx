import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
  hidden: { opacity: 0, scale: 0 }
};

interface BoxProps {
  children: React.ReactElement | React.ReactNode
}

const ScrollAnimation = ({children}: BoxProps ) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation