import React from 'react'

const NavigationBar = () => {
  return (


<div class="relative flex flex-row justify-between  h-[50px]  border-b border-[#1D1D1D] border-solid text-white ">

    {/* Menu Items */}
    {['Overview', 'Demographics', 'More'].map((item, index) => (
				<div
					key={item}
					class={`flex ${index === 1 ? 'mr-[auto]' : ''} items-center justify-center text-center text-[16px] leading-none w-[120px] h-[50px] border-r border-l border-b border-[#1D1D1D] border-solid`}
				>
					{item}
				</div>
			))}
</div>




    // <div class="relative flex flex-row justify-between w-[1035px] h-[49.56px]  border-b border-[#1D1D1D] border-solid text-white ">
    //     <div class="flex flex row ">
    //     <div class="w-[120px] h-[49.56px] border-r border-b border-[#1D1D1D] border-solid text-center pt-[10px]"> Overview</div>
    //     <div class=" w-[146.67px] h-[49.56px]  border-r border-b border-[#1D1D1D] border-sotext-whitelid text-center pt-[10px]">Demographics</div>
    //     </div>
       

    //     <div >
           
    //         <div class="  w-[115px] h-[49.56px] border-l border-b border-[#1D1D1D] border-solid text-center pt-[10px]">More</div>
    //     </div>

    // </div>
  )
}

export default NavigationBar



{/* <div class='flex flex-row w-[1040px] h-[49.56px] top-[49.99px] left-[240px] border-b border-[#1D1D1D] border-solid'>
        <div class=" w-[120px] h-[49.56px] top-[49.99px] left-[240px] border-r border-b border-[#1D1D1D] border-solid text-white text-center justify-center">Overview</div>
        <div class='w-[146.67px] h-[49.56px] top-[49.99px] left-[360px] border-r border-b border-[#1D1D1D] border-sotext-whitelid text-white text-center justify-center'>Demographics</div>
        <div class=" w-[120px] h-[49.56px] top-[49.99px] left-[1160px] border-r border-b border-[#1D1D1D] border-solid text-white text-center justify-center" >More</div>
      </div> */}
