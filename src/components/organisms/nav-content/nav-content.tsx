import { NAV_ITEMS } from "@/data/nav-data";
import { INav } from "@/models/interfaces";
import React, { ReactNode, useState } from "react";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// ================= UNDERLINE ANIMATION ========================
const LinkAnimation = ({ children }: { children: any }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        <div
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className=""
        >
          {children}
          {visible && (
            <motion.div
              className="absolute bottom-0.9  w-full h-[1px] bg-white "
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                transformOrigin: "left",
                opacity: 1,
                transition: { type: "tween" },
              }}
              exit={{
                scaleX: 0,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.6,
              }}
            />
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

const NavContent = ({ setToggle }: INav) => {
  return (
    <div className="relative z-10 w-full h-full max-w-[68%] text-center flex flex-col  items-center py-12">
      {/* NavBar */}
      <Navbar setToggle={setToggle} cross={true} />

      {/* Menu-items List */}
      <ul className="my-auto">
        {NAV_ITEMS.map(
          (item: string, idx: number): ReactNode => (
            <React.Fragment key={idx}>
              <li
                className={`cursor-pointer hover:opacity-65  text-white transition leading-normal text-[54px]`}
              >
                {item}
              </li>
            </React.Fragment>
          )
        )}
      </ul>

      {/* footer */}
      <div className="flex justify-between w-full h-fit">
        {/* Support Link */}
        <div className="w-fit relative cursor-pointer">
          <LinkAnimation>
            <p className="text-white leading-none w-fit">{`support@clingr.com`}</p>
          </LinkAnimation>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.07, transition: { type: "spring" } }}
            exit={{ scale: 1 }}
            className="relative w-8 h-6 cursor-pointer"
          >
            <Image
              src={`/static-assets/icons/vk.svg`}
              alt="vk"
              width={26}
              height={26}
              unoptimized
              priority
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.07, transition: { type: "spring" } }}
            exit={{ scale: 1 }}
            className="relative w-8 h-6 cursor-pointer"
          >
            <Image
              src={`/static-assets/icons/insta.svg`}
              alt="insta"
              width={25}
              height={25}
              unoptimized
              priority
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
