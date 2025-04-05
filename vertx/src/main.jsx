import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import TopBar from './components/TopBar/index.jsx';
import DashBoard from './pages/Dashboard/index.jsx';
import Accounts from './pages/Accounts/index.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/account" element={<Accounts />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
