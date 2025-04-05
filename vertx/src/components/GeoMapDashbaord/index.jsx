import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import worldCountries from '../../assets/world_countries.json'; // You'll need to download this file

import usaFlag from '../../assets/united-states-flag-icon.svg';
import indiaFlag from '../../assets/india-flag-icon.svg';
import canadaFlag from '../../assets/canada-flag-icon.svg';

const GeoMapDashboard = () => {
	// Sample data for the map
	const mapData = [
		{ id: 'USA', src: usaFlag, value: 25 },
		{ id: 'IND', src: indiaFlag, value: 40 },
		{ id: 'CAN', src: canadaFlag, value: 10 },
	];

	return (
		<div class="bg-black p-4 px-6 rounded-lg border-1 border-[#1D1D1D] relative">
			<h1 class="text-2xl font-500 text-white">Demographics</h1>
			<div class="w-full h-[400px] ">
				<ResponsiveChoropleth
					data={mapData}
					features={worldCountries.features}
					margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
					colors="purples"
					domain={[0, 50]}
					unknownColor="#1D1D1D"
					label="properties.name"
					valueFormat=".0f"
					projectionScale={120}
					projectionTranslation={[0.25, 1]}
					projectionRotation={[0, 0, 0]}
					enableGraticule={false}
					graticuleLineColor="#333"
					borderWidth={0.5}
					borderColor="#152538"
					theme={{
						background: '#000000',
						textColor: '#ffffff',
						tooltip: {
							container: {
								background: '#333',
								color: '#fff',
								fontSize: 12,
								borderRadius: 8,
								boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
							},
						},
					}}
					tooltip={({ feature }) => {
						return (
							<div class="bg-purple-600 text-white px-2 py-1 rounded text-sm">
								{feature.properties.name}:{' '}
								{feature.data ? feature.data.value.toLocaleString() : 'No data'}
							</div>
						);
					}}
				/>
			</div>
			<div class="absolute top-[40px] right-[40px] flex flex-col items-center justify-center border-b border-[#1D1D1D] cursor-pointer">
				{mapData.map(item => (
					<div key={item.id} class="flex flex-row mb-[20px]">
						<img src={item.src} alt={item.id} class="h-10" />
						<div class="flex flex-col items-center justify-start ml-[20px]">
							<div class="flex flex-row items-center">
								<p class="text-white text-1xl bold mr-[220px]">{item.id}</p>
								<p class="text-white text-sm">{item.value}%</p>
							</div>
							<div class="w-[100%] h-[10px] bg-[#1D1D1D] rounded-full mt-[10px]">
								<div
									class="bg-[#54278f] h-full rounded-full"
									style={{ width: `${item.value}%` }}
								></div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div class="flex items-center justify-end bg-black text-white px-4 py-2 rounded-lg">
				<span class="text-base font-small text-white mr-1.5">View all countries</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-5 h-5 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</div>
		</div>
	);
};

export default GeoMapDashboard;
