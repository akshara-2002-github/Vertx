import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header/index.jsx';
import SideBar from './components/SideBar/index.jsx';
import Dashboard from './components/Dashboard/index.jsx';
import MainPage from './pages/MainPage/index.jsx';

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
