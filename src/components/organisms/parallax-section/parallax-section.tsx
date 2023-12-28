"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = () => {
  const svgRef = useRef(null);
  const inView = useInView(svgRef);
  return (
    <>
      <section className="relative max-w-full h-[400vh] bg-bg-gray ">
        {/* main */}
        <div className="absolute mt-[100vh] bg-yellow-200 w-[700px]">
          {/* container */}
          <div className="sticky top-0 h-screen bg-transparent flex justify-center items-center">
            {/* card */}
            <div className="card w-[300px] h-[300px] bg-slate-500"></div>
          </div>

          {/* container */}
          <div className="sticky top-0 h-screen bg-transparent flex justify-center items-center">
            {/* card */}
            <div className="card w-[300px] h-[300px] bg-blue-500"></div>
          </div>

          {/* container */}
          <div className="sticky top-0 h-screen bg-transparent flex justify-center items-center">
            {/* card */}
            <div className="card w-[300px] h-[300px] bg-green-500"></div>
          </div>
        </div>

        <div className="w-full h-[100vh] absolute top-0 left-0">
          <motion.svg
            ref={svgRef}
            // className={`absolute top-0 left-0`}
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" stroke="#fff">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                d="M592.866-144.333c17.237 229.9732-31.636 459.971-140.855 662.874-109.219 202.903-274.23 370.25-475.5753 482.309M358.428-207.759c26.366 205.64186-.565 414.522-78.206 606.585C202.581 590.89 76.8365 759.688-84.9391 889.014"
                vector-effect="non-scaling-stroke"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                d="M1112.38 934.932C952.674 823.363 822.2 674.927 732.05 502.242 641.901 329.556 594.742 137.727 594.581-56.9412"
                vector-effect="non-scaling-stroke"
              ></motion.path>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                }}
                d="M133.141 927.439C286.242 724.29 499.636 574.753 742.914 500.136c243.279-74.616 504.026-70.504 745.096 11.751"
                vector-effect="non-scaling-stroke"
              ></motion.path>
            </g>
          </motion.svg>
        </div>
      </section>
    </>
  );
};

export default ParallaxSection;
