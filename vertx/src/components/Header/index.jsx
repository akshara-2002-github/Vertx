import React from 'react';

const Header = () => {
	return (
		<div class="flex flex-row h-[50px] bg-black text-white border-b border-[#1D1D1D]">
			{/* Logo Section */}
			<div class="w-[50px] h-[50px] flex items-center justify-center border-b border-[#1D1D1D]">
				<div class="bg-white w-[30px] h-[30px] rounded-full"></div>
			</div>

			{/* Company Name Section */}
			<div class="w-[190px] h-[50px] flex items-center border-t-0 border-r border-b border-l-0 border-solid border-[#1D1D1D]">
				<p class="ml-[20px] font-bold text-[18px] leading-none tracking-[-0.04em]">
					Vertxlabs, Inc
				</p>
			</div>

			{/* Menu Items */}
			{['Analytics', 'Activity', 'Logout'].map((item, index) => (
				<div
					key={item}
					className={`flex ${index === 0 ? 'mr-[auto]' : ''} items-center justify-center text-center text-[16px] leading-none w-[120px] h-[50px] border-l border-b border-[#1D1D1D] border-solid`}
				>
					{item}
				</div>
			))}
		</div>
	);
};

export default Header;
