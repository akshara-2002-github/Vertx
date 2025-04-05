import React from "react";

const TopBar = () => {
  return (
    <div class="flex flex-row w-[1280px] h-[50px] bg-black text-white">
      <div class="relative w-[50px] h-[50px] border-b border-[#1D1D1D]">
        <div class="bg-white absolute  w-[30px] h-[30px] top-[8px] left-[10px] rounded-full "></div>
      </div>

      <div class="relative w-[190px] h-[50px]  border-t-0 border-r border-b border-l-0 border-solid border-[#1D1D1D]">
        <p class="absolute  w-[110px] h-[23px] top-[14px] left-[20px]  font-[700] text-[18px] leading-[100%] tracking-[-0.04em]">
          Vertxlabs, Inc
        </p>
      </div>

      <div class=" flex relative flex-row justify-between p-4 w-[920px] h-[50px]  border-b border-[#1D1D1D] border-solid">
        <p class=" w-[67px] h-[22px] top-[14px] left-[350px] pl-[10px] font-semibold text-[16px] leading-[100%] tracking-[-0.04em]">
          Analytics
        </p>
        <div class=" absolute w-[120px] h-[50px] left-[800px]  top-[0px] border-l border-b border-[#1D1D1D] border-solid">
          <p class=" absolute top-[14px] pl-[33px]">Activity</p>
        </div>
      </div>

      <div class="relative w-[120px] h-[50px]  border-t-0 border-r border-b border-l border-solid border-[#1D1D1D]">
        <p class="absolute text-[16px] leading-[100%]  top-[14px] pl-[30px] pt-1">Logout</p>
      </div>
    </div>
  );
};

export default TopBar;

// <div class="flex  justify-between items-center  w-[920px] h-[50px]  border-b border-[#1D1D1D] border-solid">

// <p class="  w-[67px] h-[22px] top-[14px] left-[274px] font-semibold text-[16px] leading-[100%] tracking-[-0.04em] ">
//   Analytics
// </p>

// <div class="flex  w-[120px] h-[50px]  text-white  border-l border-b border-[#1D1D1D] border-solid">
//   <p class="  top-[14px] left-[1040px] w-[59px] h-[18px] font-semibold text-[16px] leading-[100%] tracking-[-0.04em] ">Activity</p>
// </div>
// </div>

// <div class="flex text-center text-[16px] leading-[100%]    w-[120px] h-[50px] left-[1160px] border-l border-b border-[#1D1D1D] border-solid">
// Logout
// </div>

// <div class="flex flex-rowrelative items-center bg-black w-[1280px] h-[50px] text-white">

{
  /* <div class="flex relative w-[50px] h-[50px]  ">
<div class=" absolute w-[30px] h-[30px] top-[8px] left-[10px] rounded-full bg-white"></div>
</div>

<div class="flex  w-[190px] h-[50px]  border-t-0 border-r border-b border-l-0 border-solid border-[#1D1D1D]">
<p class=" absolute w-[110px] h-[23px] top-[13px] left-[73px]  font-[700] text-[18px] leading-[100%] tracking-[-0.04em] ">
  Vertxlabs, Inc
</p>
</div>
</div> */
}
