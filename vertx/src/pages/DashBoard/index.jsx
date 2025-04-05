import React from "react";

import NavigationBar from "../../components/NavigationBar";

const DashBoard = () => {
  return (
    <div class=" flex flex-col w-[1041px] h-[783px] top-[49px] left-[239px] bg-black  border-[#1D1D1D] border-solid">
      <NavigationBar />

      <div class="relative flex flex-col">
        <div class=" absolute-[901px] h-[648px] top-[133px] left-[297px] flex justify-center"></div>
      </div>
    </div>
  );
};

export default DashBoard;
