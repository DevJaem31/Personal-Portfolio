import React from 'react';

function MoreInfoPage({ onNavigate }) {
	return (
		<div>
			<a
				href='/'
				onClick={(e) => {
					e.preventDefault(); // Prevent page reload
					window.history.pushState({}, '', '/'); // Update URL
					onNavigate('home'); // Change the page state
				}}
				className='learn-more-link tracking-wide'
			>
				Back
			</a>
			<div>More info</div>
		</div>
	);
}

export default MoreInfoPage;
