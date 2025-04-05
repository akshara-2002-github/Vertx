import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TopBar from './components/TopBar/index.jsx';
import DashBoard from './pages/Dashboard/index.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<TopBar />
		<DashBoard />
	</StrictMode>
);
