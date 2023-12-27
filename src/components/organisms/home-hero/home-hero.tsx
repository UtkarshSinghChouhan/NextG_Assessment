"use client";
import Navbar from "@/components/organisms/navbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import NavContent from "@/components/organisms/nav-content";
import BuyContent from "../buy-content";

const Hero = () => {
  // State to toggle the nav menu
  const [toggle, setToggle] = useState<boolean>(false);

  // State to toggle the but menu
  const [toggleBuy, setToggleBuy] = useState<boolean>(false);
  return (
    <section className="relative w-full  h-screen bg-bg-gray">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{
          y: 0,
          transition: { type: "tween", delay: 2, duration: 1.5 },
        }}
        className="relative  flex w-full  h-full bg-hero-bg bg-no-repeat bg-cover justify-center cursor-default"
      >
        <div className="relative z-20 flex flex-col items-center h-full max-w-[68%] w-full pt-12">
          {/* Navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { type: "tween", duration: 2 },
            }}
            viewport={{
              once: true,
            }}
            className="w-full"
          >
            <Navbar setToggle={setToggle} setToggleBuy={setToggleBuy} />
          </motion.div>

          {/* Intro Content */}
          <div className="my-auto overflow-hidden relative">
            {/* Intro text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { type: "tween", delay: 1.6, duration: 0.7 },
              }}
              viewport={{
                once: true,
              }}
              className=" text-center text-[120px] leading-none text-white w-fit h-full flex items-center"
            >
              Beautiful hair?
              <br /> It is easy and
              <br /> wonderful{" "}
            </motion.h1>
          </div>

          {/* Video*/}
          {/* <div className="aspect-video w-[40vw] h-[50vh]">
          <ReactPlayer
            url={`https://player.vimeo.com/video/724439058?background=1`}
            width={`100%`}
            hight={`100%`}
          />
        </div> */}
        </div>
      </motion.div>

      {/* Nav-Bar content */}
      <AnimatePresence>
        {toggle && (
          <>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="absolute inset-0 w-full h-screen bg-bg-gray flex justify-center"
            >
              <NavContent setToggle={setToggle} setToggleBuy={setToggleBuy} />

              {/* Background Svg */}
              <Image
                className="absolute z-0  inset-0"
                src={`/static-assets/icons/nav-bg-svg.svg`}
                unoptimized
                priority
                loading="eager"
                alt={`nav-bg-svg`}
                layout="fill"
              />
            </motion.section>
          </>
        )}
      </AnimatePresence>

      {/* Buy-Menu content */}
      <AnimatePresence>
        {toggleBuy && (
          <>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%] h-[95%] rounded-[24px] bg-bg-gray flex justify-center"
            >
              <BuyContent setToggle={setToggleBuy} />
            </motion.section>
          </>
        )}
      </AnimatePresence>

      {/* Center Svg Icon */}
      {/* <div
        className={`absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-full h-full`}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#fff" opacity="0.3">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M725.737 823.347c21.728-179.095 109.943-343.493 247.166-460.613 137.217-117.121 313.437-178.417 493.717-171.741"
            ></motion.path>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
                delay: 0.4,
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M722.189 853.736c12.542-208.826 94.497-407.476 232.85-564.397C1093.39 132.418 1280.21 26.2215 1485.82-12.3826"
            ></motion.path>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
                delay: 0.3,
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M720.56 896.517c2.944-337.324 116.245-664.407 322.59-931.2733"
            ></motion.path>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
                delay: 0.2,
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M507.63000000000005,1690.7600000000002C630.6210000000001,1480.83 702.278,1244.81 716.7620000000001,1001.94C731.245,759.072 688.1460000000001,516.214 590.975,293.158C493.805,70.1012 345.312,-126.844 157.59599999999995,-281.631C-30.12020000000001,-436.4169999999999 -251.749,-544.6669999999999 -489.233,-597.56"
            ></motion.path>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                delay: 0.1,
                ease: "easeInOut",
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M507.87199999999996,1503.6599999999999C598.17,1393.11 662.058,1263.4099999999999 694.674,1124.4299999999998C727.29,985.463 727.774,840.882 696.091,701.6949999999999C664.407,562.508 601.3910000000001,432.382 511.836,321.221C422.282,210.059 308.55,120.791 179.296,60.2094C50.0409,-.372133 -91.3302,-30.6705 -234.0589999999999,-28.379899999999907C-376.78899999999993,-26.0893999999999 -517.1149999999999,8.729710000000097 -644.3589999999999,73.4276000000001C-771.603,138.12500000000009 -882.4119999999999,230.99700000000007 -968.353,344.9750000000001C-1054.29,458.95300000000003 -1113.1,591.0340000000001 -1140.3,731.166"
            ></motion.path>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.9,
                ease: "easeInOut",
              }}
              vector-effect="non-scaling-stroke"
              fill="none"
              d="M199.062,1601.41C302.877,1571.53 398.62800000000004,1518.64 479.211,1446.69C559.795,1374.74 623.141,1285.56 664.549,1185.78C705.957,1086 724.365,978.1779999999999 718.405,870.31C712.4459999999999,762.443 682.273,657.3029999999999 630.126,562.6909999999999C577.978,468.07899999999995 505.19399999999996,386.4239999999999 417.17599999999993,323.78599999999994C329.1569999999999,261.14799999999997 228.16299999999995,219.135 121.68699999999995,200.86399999999998C15.212099999999964,182.59299999999996 -94.01080000000003,188.53399999999996 -197.87600000000003,218.24399999999997C-301.742,247.95499999999998 -397.584,300.674 -478.29,372.489"
            ></motion.path>
          </g>
        </motion.svg>
      </div> */}
    </section>
  );
};

export default Hero;
