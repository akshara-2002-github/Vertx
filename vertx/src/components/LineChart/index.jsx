import React from 'react';
import { ResponsiveLine } from '@nivo/line';

// Updated Line Chart Data with more granular points to match the image
const lineData = [
	{
		id: 'Visitors',
		data: [
			{ x: 'Mar 1', y: 320 },
			{ x: 'Mar 2', y: 500 },
			{ x: 'Mar 3', y: 850 },
			{ x: 'Mar 4', y: 1300 },
			{ x: 'Mar 5', y: 1250 },
			{ x: 'Mar 6', y: 1050 },
			{ x: 'Mar 7', y: 950 },
			{ x: 'Mar 8', y: 900 },
			{ x: 'Mar 9', y: 1100 },
			{ x: 'Mar 10', y: 1350 },
			{ x: 'Mar 11', y: 800 },
			{ x: 'Mar 12', y: 750 },
			{ x: 'Mar 13', y: 700 },
			{ x: 'Mar 14', y: 830 },
			{ x: 'Mar 15', y: 850 },
			{ x: 'Mar 16', y: 800 },
			{ x: 'Mar 17', y: 750 },
			{ x: 'Mar 18', y: 700 },
			{ x: 'Mar 19', y: 650 },
			{ x: 'Mar 20', y: 2000 },
			{ x: 'Mar 21', y: 1000 },
			{ x: 'Mar 22', y: 650 },
			{ x: 'Mar 23', y: 1000 },
			{ x: 'Mar 24', y: 850 },
			{ x: 'Mar 25', y: 1100 },
			{ x: 'Mar 26', y: 500 },
			{ x: 'Mar 27', y: 1350 },
			{ x: 'Mar 28', y: 1000 },
			{ x: 'Mar 29', y: 1650 },
			{ x: 'Mar 30', y: 600 },
			{ x: 'Mar 31', y: 1800 },
		],
	},
];

// Line Chart Theme
const lineTheme = {
	background: '#000',
	textColor: '#1D1D1D',
	axis: {
		domain: { line: { stroke: '#1D1D1D' } },
		ticks: { text: { fill: '#1D1D1D' } },
		legend: { text: { fill: '#1D1D1D' } },
	},
};

const LineChart = () => {
	return (
		<div class="p-4 bg-black rounded-lg border-2 border-[#1d1d1d] w-full">
			<div class="flex items-center justify-between mb-4">
				<div class="flex flex-direction-col items-center">
					{['Visitors', 'Last 30 days'].map((item, index) => (
						<div
							key={item}
							class="bg-black border border-gray-600 text-white p-2 rounded-full mr-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition duration-300 ease-in-out"
						>
							<select class="py-0 px-0mw-[300px]">
								<option class="bg-black text-white" value={item}>
									{item}
								</option>
							</select>
						</div>
					))}
				</div>
			</div>
			<div class="flex flex-row items-center flex-start mb-4">
				<h1 class="text-4xl font-bold text-white">13.49K</h1>
				<div class="flex items-center flex-col ml-4">
					<p class="text-[#01754F] font-semibold">+469%</p>
					<p class="text-[#1D1D1D]">(897)</p>
				</div>
			</div>
			<div class="h-[223px]">
				<ResponsiveLine
					data={lineData}
					theme={lineTheme}
					margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
					axisBottom={{
						tickSize: 0,
						tickPadding: 10,
						tickRotation: 0,
						legend: '',
						legendPosition: 'middle',
						legendOffset: 40,
						tickValues: [
							'Mar 1',
							'Mar 5',
							'Mar 10',
							'Mar 15',
							'Mar 20',
							'Mar 25',
							'Mar 30',
						], // Control visible ticks
					}}
					axisLeft={{
						tickSize: 0,
						tickPadding: 20,
						tickRotation: 0,
						legend: '',
						legendPosition: 'middle',
						legendOffset: -45,
						tickValues: [200, 400, 800, 1200, 1600, 2000], // Match y-axis values from image
						format: value => (value >= 1000 ? `${value / 1000}K` : value), // Format y-axis values as "2K", "1.6K", etc.
						ticksPosition: 'inside', // Position ticks inside the chart
					}}
					colors="#fff"
					pointSize={1} // Remove dots at data points
					pointColor={{ theme: 'background' }}
					pointBorderWidth={2}
					pointBorderColor={{ from: 'serieColor' }}
					useMesh={false}
					enableGridX={false} // Disable vertical grid lines
					enableGridY={false} // Disable horizontal grid lines
					lineWidth={2} // Match line thickness
					enableArea={false}
					enableSlices={false}
				/>
			</div>
		</div>
	);
};

export default LineChart;
