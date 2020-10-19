import React from "react";

import SideBarMenu from "./SideBarMenu";
import SideBarGallery from "./SideBarGallery";

const SideBarContainer = () => {
  return (
    <aside className="sidebar trans-0-4">
      <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>
      <SideBarMenu />
      <SideBarGallery />
    </aside>
  );
};

export default SideBarContainer;
