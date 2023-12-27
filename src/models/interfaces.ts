import { Dispatch, SetStateAction } from "react";

//================== Navbar =====================
export interface INav {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface INavBar extends INav {
  cross?: boolean;
  setToggleBuy: Dispatch<SetStateAction<boolean>>;
}

export interface INavItem {
  item: string;
}
