import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import LineChart from '../../components/LineChart/index.jsx';
import GeoMapDashboard from '../../components/GeoMapDashbaord/index.jsx';

const DashBoard = () => {
	return (
		<div class=" flex flex-col w-full h-full bg-black border-[#080808] border-solid">
			<NavigationBar />
			<div class="w-full bg-[#1D1D1D] border-[#1D1D1D] border-solid px-9 py-8">
				<p class="text-white text-[24px] leading-[30px] font-bold mb-8">Overview</p>

				<div class="flex flex-row">
				<div class="w-[70%] mb-5">
					<LineChart />
				</div>
				<div class="flex flex-col w-[30%] mb-5 ml-5 bg-black border-[#080808] border-solid rounded-[7px] text-white px-9 py-8 ">
					<h1 class="text-[22px] mb-[20px] ">Insights</h1>
					<h2 class="text-[18px]">Founders</h2>
					<div class = "flex flex-row">
						<h1 class="text-[32px] mr-[40px]">7.4K</h1>
						<div class="flex flex-col items-start">
							<p class="text-green-800">+000%</p>
							<p class="ml-[10px]">(000)</p>
						</div>
					</div>

					<h2  class="text-[18px] mt-[20px]">Investors</h2>
					<div class = "flex flex-row">
						<h1 class="text-[32px] mr-[20px]">6.09K</h1>
						<div class="flex flex-col items-start">
							<p class="text-green-800">+000%</p>
							<p  class="ml-[10px]">(000)</p>
						</div>
					</div>
					<div class="border border-[#1D1D1D] w-[25=60px] my-[20px] "/>
					<div>
					<p class="ml-[120px]">View detailed insights </p>
					</div>
					



				</div>
				
				</div>
				
				<div class="w-full">
					<GeoMapDashboard />
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
