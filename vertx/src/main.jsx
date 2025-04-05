import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import MainPage from './pages/MainPage';

import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<div class="flex">
			<SideBar />
			<Dashboard />
			<MainPage />
		</div>
	</StrictMode>
);
