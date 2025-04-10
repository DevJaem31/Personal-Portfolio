import React, { useState } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import useKeepAlive from './utils/keep-alive';

import MainPage from './pages/main-page/main-page';
import MoreInfoPage from './pages/more-info-page/more-info-page';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	useKeepAlive();

	return (
		<div>
			{currentPage === 'home' ? (
				<MainPage onNavigate={setCurrentPage} />
			) : (
				<MoreInfoPage onNavigate={setCurrentPage} />
			)}

			<Toaster
				position='bottom-right'
				reverseOrder={false}
				toastOptions={{
					duration: 5000,
				}}
			/>
		</div>
	);
}

export default App;
