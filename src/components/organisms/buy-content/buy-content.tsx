import { INav } from "@/models/interfaces";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const BuyContent = ({ setToggle }: INav) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className="relative w-full full bg-buy-bg rounded-[24px] flex items-center justify-center">
      <div className="w-[81%] h-[82%] flex">
        {/* left  */}
        <div className="relative w-[50%] h-full ">
          {/* <div className="text-[84px] text-[#bc978c] absolute z-10 pt-[3.25rem] pl-[3.25rem] -space-y-28"> */}
          <div className="text-[84px] text-[#bc978c] absolute z-50 pt-[3.25rem] pl-[3.25rem] -space-y-28">
            <motion.span
              className="block w-fit h-fit leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "tween", duration: 0.4 },
              }}
            >
              Buy
            </motion.span>
            <br />
            <motion.span
              className="block w-fit h-fit leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "tween", delay: 0.1, duration: 0.4 },
              }}
            >
              a Clingr
            </motion.span>
          </div>
          <Image
            src={`https://clingr.me/assets/images/media/landing/12.how-to-buy/modal@xxxl.webp`}
            alt={`buy-img`}
            width={550}
            height={400}
            unoptimized
            priority
            loading="eager"
            quality={80}
            className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2"
          />

          <Image
            src={`/static-assets/icons/buy-content-svg.svg`}
            alt={`buy-bg-svg`}
            className="absolute z-0"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Right */}
        <div className="w-[50%] h-full  flex pt-[5.5rem]">
          <input
            ref={inputRef}
            type="text"
            placeholder="Select country"
            className="text-text-gray w-[80%] mx-auto h-fit py-5 border-b border-b-black focus:outline-none bg-transparent text-[18px]"
          />
        </div>
      </div>

      {/* cross button */}
      <div
        onClick={() => setToggle(false)}
        className="absolute top-[15px] right-[16px] w-[60px] h-[60px] cursor-pointer rounded-full bg-[#bc978c] bg-opacity-55 flex justify-center items-center"
      >
        <Image
          src={`/static-assets/icons/buy-cross.svg`}
          alt={`cross`}
          width={20}
          height={20}
          unoptimized
          priority
          loading="eager"
        />
      </div>
    </section>
  );
};

export default BuyContent;
