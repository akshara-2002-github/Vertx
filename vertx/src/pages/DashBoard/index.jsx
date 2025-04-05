import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import LineChart from '../../components/LineChart/index.jsx';
import GeoMapDashboard from '../../components/GeoMapDashbaord/index.jsx';
import SideBar from '../../components/SideBar/index.jsx';

const DashBoard = () => {
	return (
		<div class="flex flex-row w-full h-full bg-black border-[#080808] border-solid">
			<SideBar />
			<div class="w-full h-full bg-black border-[#080808] border-solid overflow-scroll">
				<NavigationBar />
				<div class="w-full bg-[#1D1D1D] border-[#1D1D1D] border-solid px-9 py-8">
					<p class="text-white text-[24px] leading-[30px] font-bold mb-8">
						Overview
					</p>
					<div class="w-[50%] mb-5">
						<LineChart />
					</div>
					<div class="w-full mb-12">
						<GeoMapDashboard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
