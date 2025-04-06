import React from 'react';
import { useNavigate } from 'react-router-dom';

import SideBarExtension from '../SideBarExtension';

const SideBar = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/account');
	};

	return (
		<div class="flex flex-row w-[240px] h-[calc(100%-50px)] sticky top-[50px] left-0 z-10">
			<div class=" flex flex-col justify-between w-[50px] bg-black border-r border-[#1D1D1D] border-solid">
				<div class="w-[50px] h-[50px] relative">
					<div
						class="w-[30px] h-[30px] absolute bg-white  top-[8px] left-[10px] rounded-full"
						onClick={handleClick}
					></div>
				</div>
				<div class="w-[50px] h-[50px] ">
					<div class="p-[10px] text-center text-white">+</div>
				</div>
			</div>
			<SideBarExtension />
		</div>
	);
};

export default SideBar;
