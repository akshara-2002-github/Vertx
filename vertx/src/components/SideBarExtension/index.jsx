import React from 'react';

const SideBarExtension = () => {
	return (
		<div class="flex w-[190px] h-[calc(100%-50px)] bg-black  border-r border-[#1D1D1D] border-solid text-white">
			<div class="flex flex-col gap-[30px] px-[25px] py-[20px]">
				{[
					'Dashboard',
					'Analytics',
					'Connect',
					'Dealroom',
					'Profile',
					'Settings',
				].map((item, index) => (
					<div
						key={item}
						class={index !== 1 ? 'text-[#555555]' : ''}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default SideBarExtension;
