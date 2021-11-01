import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

 
  // Brand == social
  {
    _tag: "CSidebarNavItem",
    name: "Socials",
    to: "/social",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

  // Category ==cause
  {
    _tag: "CSidebarNavItem",
    name: "Cause",
    to: "/cause",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

 
  // supplier = terms and conditions
  {
    _tag: "CSidebarNavItem",
    name: "Terms and Conditions",
    to: "/terms",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  // Import == policy
  {
    _tag: "CSidebarNavItem",
    name: "Policy",
    to: "/policy",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },

    // Buy
    {
      _tag: "CSidebarNavItem",
      name: "Buy",
      to: "/buy",
      icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    },

    // BuyPhase
      {
        _tag: "CSidebarNavItem",
        name: "Buy Phase Edit",
        to: "/buyphase",
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },

       // AddressToken
       {
        _tag: "CSidebarNavItem",
        name: "Address",
        to: "/address",
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      }
   
 
];

export default _nav;
