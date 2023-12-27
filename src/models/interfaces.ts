import { Dispatch, SetStateAction } from "react";

//================== Navbar =====================
export interface INav {
  setToggle: Dispatch<SetStateAction<boolean>>;
}
