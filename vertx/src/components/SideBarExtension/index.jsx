import React from 'react';

const SideBarExtension = () => {
	return (
		<div class="flex w-[190px] h-[calc(100%-50px)] bg-black  border-r border-[#1D1D1D] border-solid text-white">
			<div class="flex flex-col gap-[30px] px-[20px] py-[20px]">
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

export default SideBarExtension;
