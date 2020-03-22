import React from "react";
import MessageIcon from "@material-ui/icons/Message";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

const list = [
  {
    title: "HOME",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "ABOUT US",
    icon: <InfoIcon />,
    link: "/about-us"
  },
  {
    title: "SERVICES",
    icon: <BusinessCenterIcon />,
    link: "/services"
  },
  {
    title: "PROJECTS",
    icon: <FormatListBulletedIcon />,
    link: "/projects"
  },
  {
    title: "CONTACT US",
    icon: <MessageIcon />,
    link: "/contact-us"
  }
];

export default list;
