import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { RiTodoFill } from "react-icons/ri";

export const AdminSidebarMenu = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: AiOutlineDashboard,
  },
  {
    title: "Add-Todo",
    href: "/admin/add-todo",
    icon: RiTodoFill,
  },
  {
    title: "Category",
    href: "#",
    icon: BiCategory,
    submenu: [
      {
        title: "Add-Category",
        href: "",
      },
      {
        title: "All-Category",
        href: "",
      },
    ],
  },
  {
    title: "Products",
    href: "#",
    icon: IoShirtOutline,
    submenu: [
      {
        title: "Add-Products",
        href: "",
      },
      {
        title: "Add-Variant",
        href: "",
      },
    ],
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: MdOutlinePermMedia,
  },
];
