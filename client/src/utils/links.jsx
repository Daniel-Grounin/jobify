import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    //the paths is in the App.jsx, startinmg from /dashboard
    text: "add job",
    path: ".", //"." is for "/dashboard/"nothing""
    icon: <FaWpforms />,
  },
  {
    text: "all jobs",
    path: "all-jobs", // "/dashboard/all-jobs"
    icon: <MdQueryStats />,
  },
  {
    text: "stats",
    path: "stats", // "/dashboard/stats"
    icon: <IoBarChartSharp />,
  },
  {
    text: "profile",
    path: "profile", //  "/dashboard/profile"
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin", //  "/dashboard/admin"
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
