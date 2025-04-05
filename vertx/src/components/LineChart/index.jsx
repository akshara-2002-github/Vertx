import React from 'react';
import { ResponsiveLine } from '@nivo/line';

// Updated Line Chart Data with more granular points to match the image
const data = {
	visitors: [
		{
			key: 'Visitors',
			id: 'visitors',
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
	],
	uniqueVisitors: [
		{
			key: 'Unique Visitors',
			id: 'uniqueVisitors',
			data: [
				{
					x: 'Mar 1',
					y: 79.5,
				},
				{
					x: 'Mar 2',
					y: 125,
				},
				{
					x: 'Mar 3',
					y: 212.5,
				},
				{
					x: 'Mar 4',
					y: 325,
				},
				{
					x: 'Mar 5',
					y: 312.5,
				},
				{
					x: 'Mar 6',
					y: 262.5,
				},
				{
					x: 'Mar 7',
					y: 237.5,
				},
				{
					x: 'Mar 8',
					y: 1000,
				},
				{
					x: 'Mar 9',
					y: 0,
				},
				{
					x: 'Mar 10',
					y: 337.5,
				},
				{
					x: 'Mar 11',
					y: 200,
				},
				{
					x: 'Mar 12',
					y: 187.5,
				},
				{
					x: 'Mar 13',
					y: 175,
				},
				{
					x: 'Mar 14',
					y: 207.5,
				},
				{
					x: 'Mar 15',
					y: 212.5,
				},
				{
					x: 'Mar 16',
					y: 200,
				},
				{
					x: 'Mar 17',
					y: 187.5,
				},
				{
					x: 'Mar 18',
					y: 175,
				},
				{
					x: 'Mar 19',
					y: 162.5,
				},
				{
					x: 'Mar 20',
					y: 500,
				},
				{
					x: 'Mar 21',
					y: 250,
				},
				{
					x: 'Mar 22',
					y: 162.5,
				},
				{
					x: 'Mar 23',
					y: 250,
				},
				{
					x: 'Mar 24',
					y: 212.5,
				},
				{
					x: 'Mar 25',
					y: 275,
				},
				{
					x: 'Mar 26',
					y: 125,
				},
				{
					x: 'Mar 27',
					y: 337.5,
				},
				{
					x: 'Mar 28',
					y: 250,
				},
				{
					x: 'Mar 29',
					y: 412.5,
				},
				{
					x: 'Mar 30',
					y: 150,
				},
				{
					x: 'Mar 31',
					y: 450,
				},
			],
		},
	],
};

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

const getHighLows = data => {
	const yValues = data.map(d => d.y);
	const maxValue = Math.max(...yValues);
	const minValue = Math.min(...yValues);
	const totalValue = yValues.reduce((acc, val) => acc + val, 0);
	return [yValues.length, maxValue, minValue, totalValue];
};

const formatAsK = value => {
	if (value >= 1000) {
		return `${value / 1000}K`;
	}
	return value;
};

const LineChart = () => {
	const [lineData, setLineData] = React.useState(data.visitors);

	const handleChangeType = e => {
		const selectedValue = e.target.value;
		setLineData(data[selectedValue] ?? []);
	};

	const [totalPoints, maxValue, minValue, totalValue] = getHighLows(
		lineData[0].data
	);

	return (
		<div class="p-4 px-6 bg-black rounded-lg border-1 border-[#1d1d1d] w-full">
			<div class="flex items-center mb-4">
				<div class="flex flex-direction-col items-center">
					{['Visitors', 'Last 30 days'].map((item, index) => (
						<div
							key={item}
							class={`bg-black border border-gray-600 text-white py-1 rounded-full mr-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition duration-300 ease-in-out ${index === 2 ? 'border-dashed' : ''}`}
						>
							<select class="py-0 px-0mw-[300px]" onChange={handleChangeType}>
								{index == 0 ? (
									Object.keys(data).map(el => (
										<option class="py-0 bg-black text-white text-sm" value={el}>
											{data[el][0].key}
										</option>
									))
								) : (
									<option class="py-0 bg-black text-white text-sm">
										30 Days
									</option>
								)}
							</select>
						</div>
					))}
				</div>
				<div
					class={`bg-black border border-gray-600 text-white py-1 rounded-full mr-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition duration-300 ease-in-out border-dashed`}
				>
					<p class="bg-black text-white px-1 py-0 text-sm">+ Add</p>
				</div>
			</div>
			<div class="flex flex-row items-center flex-start mb-4">
				<h1 class="text-4xl font-bold text-white">{formatAsK(totalValue)}</h1>
				<div class="flex items-center flex-col ml-4">
					<p class="text-[#01754F] font-semibold">+{maxValue - minValue}%</p>
					<p class="text-[#1D1D1D]">({totalPoints})</p>
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
