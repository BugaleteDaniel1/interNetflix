import { MdWeb } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePlayPause } from "react-icons/hi2";
import { BsPerson, BsPeople } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";

export const navData = [
  {
    title: "Menu",
    submenus: [
      {
        submenuTitle: "browse",
        submenuIcon: <MdWeb />,
        path: "/",
      },
      {
        submenuTitle: "watchlist",
        submenuIcon: <IoMdHeartEmpty />,
        path: "/",
      },
      {
        submenuTitle: "coming soon",
        submenuIcon: <HiOutlinePlayPause />,
        path: "/",
      },
    ],
  },
  {
    title: "social",
    submenus: [
      {
        submenuTitle: "friends",
        submenuIcon: <BsPerson />,
        path: "/",
      },
      {
        submenuTitle: "parties",
        submenuIcon: <BsPeople />,
        path: "/",
      },
    ],
  },
  {
    title: "general",
    submenus: [
      {
        submenuTitle: "settigns",
        submenuIcon: <FiSettings />,
        path: "/",
      },
      {
        submenuTitle: "log out",
        submenuIcon: <FiLogOut />,
        path: "/",
      },
    ],
  },
];
