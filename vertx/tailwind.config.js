/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// green: '#01754F', // Custom green color
				// grey: '#1D1D1D', // Custom grey color (note spelling difference from "gray")
			},
		},
	},
	plugins: [],
};
