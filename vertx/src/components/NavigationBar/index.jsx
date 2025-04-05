import React from 'react';

const NavigationBar = () => {
	return (
		<div class="flex flex-row justify-between h-[50px] bg-black border-b border-[#1D1D1D] border-solid text-white sticky top-[50px] left-0">
			{['Overview', 'Demographics', 'More'].map((item, index) => (
				<div
					key={item}
					class={`flex ${index === 1 ? 'mr-[auto]' : ''} items-center justify-center text-center text-[16px] leading-none w-[120px] h-[50px] border-r border-l border-b border-[#1D1D1D] border-solid`}
				>
					{item}
				</div>
			))}
		</div>
	);
};

export default NavigationBar;
