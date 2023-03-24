import React from "react";

// icons
import dashboard from "../../assets/img/dashboard.png"
import labs from "../../assets/img/labs.png"
import analytics from "../../assets/img/analytics.png"
import equipment from "../../assets/img/equipment.png"
import message from "../../assets/img/message.png"
import settings from "../../assets/img/settings.png"

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      link: "Dashboard",
      isActive: true,
      icon: dashboard
    },
    {
      id: 2,
      link: "Labs",
      isActive: false,
      icon:labs
    },
    {
      id: 3,
      link: "Analytics",
      isActive: false,
      icon: analytics
    },
    {
      id: 4,
      link: "Equipment",
      isActive: false,
      icon: equipment
    },
    {
      id: 5,
      link: "Messages",
      isActive: false,
      icon: message
    },
    {
      id: 6,
      link: "Settings",
      isActive: false,
      icon: settings
    },
  ];
  return (
    <div className="px-6 py-3">
      <ul className="menu">
        {
          menuItems.map((item) => {
            return (
              <li key={item.id} className="menu-item">
                <a href="#" className={item.isActive ? "active" : ""}>
                 <img src={item?.icon} className="mr-2" alt=""/> {item.link}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Menu;
