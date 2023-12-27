import { INavItem } from "@/models/interfaces";
import { motion } from "framer-motion";

const NavListItem = ({ item }: INavItem) => {
  const variants = {
    rest: {
      opacity: 0,
      scale: 0,
      duration: 0.1,
      type: "tween",
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        type: "tween",
      },
    },
  };
  return (
    <li>
      <motion.div
        className={`relative cursor-pointer hover:opacity-65 transition `}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          className="w-[900px] h-[600px] absolute -z-10 -top-[36rem] -left-36"
          variants={variants}
        >
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <mask id="mask1" mask-type="alpha">
              <path
                d="M65 48.7C21.7 112.5 -119.1 131.3 -146.1 76.8C-173.2 22.3 -86.6 -105.3 -16.2 -114.7C54.1 -124.1 108.3 -15.2 65 48.7"
                fill="#f1e4e9"
              ></path>
            </mask>
            <g
              mask="url(#mask1)"
              transform="translate(485.3617247793525 303.2209249605649)"
            >
              <path
                d="M65 48.7C21.7 112.5 -119.1 131.3 -146.1 76.8C-173.2 22.3 -86.6 -105.3 -16.2 -114.7C54.1 -124.1 108.3 -15.2 65 48.7"
                fill="#f1e4e9"
              ></path>
              <image
                className="w-[270px]"
                x="-160"
                y="-120"
                href="/static-assets/images/nav-img-1.jpg"
              />
            </g>
          </svg>
        </motion.div>

        <p className=" leading-none text-[54px] text-white w-fit h-fit  text-center">
          {item}
        </p>
      </motion.div>
    </li>
  );
};

export default NavListItem;
