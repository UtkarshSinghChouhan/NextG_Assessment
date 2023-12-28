"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductScale = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const scaleCard = useTransform(scrollYProgress, [0, 1], [1, 100]);
  return (
    <section
      ref={containerRef}
      className=" w-full h-screen bg-green-300 flex items-center justify-center"
    >
      <motion.div
        style={{ scale: scrollYProgress }}
        className="bg-white w-[500px] h-[500px]"
      ></motion.div>
    </section>
  );
};

export default ProductScale;
