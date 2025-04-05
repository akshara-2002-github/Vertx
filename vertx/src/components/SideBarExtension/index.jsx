import React from "react";

const SideBarExtension = () => {
  return (
    <div class="flex relative  w-[190px] h-full bg-black  border-r border-[#1D1D1D] border-solid text-white">
    <div class="flex flex-col absolute  gap-[30px] top-[20px] left-[20px] ">
      <div>Dashboard</div>
      <div>Analytics</div>
      <div>Connect</div>
      <div>Dealroom</div>
      <div>Profile</div>
      <div>Settings</div>
    </div>
    </div>
  );
};

export default SideBarExtension ;
