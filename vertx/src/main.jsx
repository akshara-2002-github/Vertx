import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SideBar from './components/SideBar/index.jsx';
import TopBar from './components/TopBar/index.jsx';
import DashBoard from './pages/Dashboard/index.jsx';
import LineChart from './components/LineChart/index.jsx';
import GeoMapDashboard from './components/GeoMapDashbaord/index.jsx';

import "./index.css";

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<TopBar />
		<LineChart />
		<GeoMapDashboard />
	</StrictMode>
);
