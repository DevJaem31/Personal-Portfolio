import React, { useState } from 'react';
import './navigation-section.css';

function NavigationSection() {
	const [active, setActive] = useState('ABOUT');

	const handleActive = (item) => {
		setActive(item);
	};

	return (
		<div className='navigation-section-container '>
			<ul className='navbar-list flex flex-col gap-5'>
				<li
					className={`navigation-item left text-lg ${active === 'ABOUT' ? 'active' : 'inactive'}`}
					onClick={() => handleActive('ABOUT')}
				>
					<a href='#'>ABOUT</a>
				</li>
				<li
					className={`navigation-item left text-lg ${active === 'SKILLS' ? 'active' : 'inactive'}`}
					onClick={() => handleActive('SKILLS')}
				>
					<a href='#'>SKILLS</a>
				</li>
				<li
					className={`navigation-item left text-lg ${
						active === 'PROJECTS' ? 'active' : 'inactive'
					}`}
					onClick={() => handleActive('PROJECTS')}
				>
					<a href='#'>PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default NavigationSection;
