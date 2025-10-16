// Import Sidebar

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdraw,
} from "@iconscout/react-unicons";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
      {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
      {
        icon: UilUsersAlt,
        heading: "Customers",
    },
      {
        icon: UilPackage,
        heading: "Products",
    },
      {
        icon: UilChart,
        heading: "Analytics",
    }
];

export const CardsData = [
 { 
  title: "Sales",
  color: {
    background: "#72b477ff",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
  },
  barValue: 70,
  value: 25970,
  png: UilUsdSquare,
  series: [
    {
      name: "Revenue",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]
 },
  { 
  title: "Expenses",
  color: {
    background: "#52357B",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
  },
  barValue: 80,
  value: 25970,
  png: UilUsdSquare,
  series: [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]
 },
  { 
  title: "Sales",
  color: {
    background: "#FFA4A4",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
  },
  barValue: 60,
  value: 25970,
  png: UilMoneyWithdraw,
  series: [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]
 },
]

// Recent Updates
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    notification: "has ordered Apple smart watch",
    time: "25 seconds ago"
  },
  {
    img: img2,
    name: "James Lacke",
    notification: "has ordered Apple smart watch",
    time: "15 seconds ago"
  },
  {
    img: img3,
    name: "Terry Mack",
    notification: "has ordered Apple smart watch",
    time: "5 seconds ago"
  },
]