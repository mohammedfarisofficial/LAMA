import { bellIcon, settingsIcon } from "../icons";

const sidebarLinks = [
  {
    path: "overview/upload",
    title: "Project",
    step: 1,
  },
  {
    path: "widget-configuaration",
    title: "Widget Config",
    step: 2,
  },
  {
    path: "deployment",
    title: "Deployment",
    step: 3,
  },
  {
    path: "pricing",
    title: "Pricing",
    step: 4,
  },
];

const navbarLinks = [
  {
    path: "settings",
    icon: settingsIcon,
  },
  {
    path: "notification",
    icon: bellIcon,
  },
];

// table

const tableHeaders = [
  {
    title: "Name",
  },
  {
    title: "Upload Date & Time",
  },
  {
    title: "Status",
  },
  {
    title: "Actions",
  },
];

export { sidebarLinks, navbarLinks, tableHeaders };
