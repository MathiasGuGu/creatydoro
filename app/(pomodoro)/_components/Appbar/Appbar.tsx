import React from "react";
import AppbarSettingsMenu from "./AppbarSettingsMenu";

const Appbar = () => {
  return (
    <div className=" flex items-center justify-between px-12 h-16 w-screen fixed">
      Creatodoro
      <AppbarSettingsMenu />
    </div>
  );
};

export default Appbar;
