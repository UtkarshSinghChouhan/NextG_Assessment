import { INav, INavBar } from "@/models/interfaces";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = ({ setToggle, setToggleBuy, cross = false }: INavBar) => {
  return (
    <section className=" flex items-center justify-between w-full h-fit">
      {/* Logo */}
      <p className="text-white text-2xl leading-normal cursor-pointer">{`Clingr`}</p>

      {/* Buy button and Hamburger icon*/}
      <div className="relative z-50 bg-white/40 flex  gap-[3.5rem]">
        <div className="relative">
          <p
            className="leading-none text-white cursor-pointer"
            onClick={() => {
              setToggleBuy(true);
              setToggle(false);
            }}
          >{`Buy`}</p>
        </div>

        {!cross ? (
          <>
            {/* Hamburger Icon */}
            <div
              className=" flex flex-col  gap-2 h-fit w-[50px] cursor-pointer"
              onClick={() => setToggle(true)}
            >
              <div className="w-full h-[2px] bg-white"></div>
              <div className="w-full h-[2px] bg-white"></div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.07, transition: { type: "spring" } }}
              exit={{ scale: 1 }}
              className="relative w-8 h-6 cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <Image
                src={`/static-assets/icons/close-cross.svg`}
                alt={`cross`}
                layout="fill"
                objectFit="cover"
                unoptimized
                priority
                loading="eager"
              />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Navbar;
