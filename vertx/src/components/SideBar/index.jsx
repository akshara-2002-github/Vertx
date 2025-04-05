import React from "react";

import SideBarExtension from "../SideBarExtension";

const SideBar = () => {
  return (
    <div class="flex flex-row">
      <div class=" flex flex col justify-between w-[50px] h-[782px] top-[50px] bg-black border-r border-[#1D1D1D] border-solid">
        <div class="w-[50px] h-[50px] relative">
          <div class="w-[30px] h-[30px] absolute bg-white  top-[8px] left-[10px] rounded-full "></div>
        </div>

        <div class="w-[50px] h-[50px] relative">
          <div class="w-[14px] h-[14px]  absolute absolute text-white">+</div>
        </div>
      </div>

      <div>
        <SideBarExtension />
      </div>
    </div>
  );
};

export default SideBar;
