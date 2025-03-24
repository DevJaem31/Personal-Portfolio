import React, { useState, useLayoutEffect } from 'react';
import './navigation-section.css';

function NavigationSection() {
	const [active, setActive] = useState('ABOUT');

	const handleActive = (item) => {
		setActive(item);
	};

	useLayoutEffect(() => {
		const sections = document.querySelectorAll('section'); // Select all sections on the page

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// When the section is in view, update the active state
						setActive(entry.target.id.toUpperCase());
					}
				});
			},
			{
				rootMargin: '0px 0px -100% 0px', // Observe when the section's top hits the top of the viewport
				threshold: 0, // Trigger when the top of the section touches the top of the viewport
			},
		);

		sections.forEach((section) => {
			observer.observe(section); // Observe each section
		});

		return () => {
			observer.disconnect(); // Clean up observer on unmount
		};
	}, []);

	return (
		<div className='navigation-section-container'>
			<ul className='navbar-list flex flex-col gap-5'>
				<li
					className={`navigation-item left text-lg ${active === 'ABOUT' ? 'active' : 'inactive'}`}
					onClick={() => handleActive('ABOUT')}
				>
					<a href='#about'>ABOUT</a>
				</li>
				<li
					className={`navigation-item left text-lg ${active === 'SKILLS' ? 'active' : 'inactive'}`}
					onClick={() => handleActive('SKILLS')}
				>
					<a href='#skills'>SKILLS</a>
				</li>
				<li
					className={`navigation-item left text-lg ${
						active === 'EXPERIENCE' ? 'active' : 'inactive'
					}`}
					onClick={() => handleActive('EXPERIENCE')}
				>
					<a href='#experience'>EXPERIENCE</a>
				</li>
				<li
					className={`navigation-item left text-lg ${
						active === 'PROJECTS' ? 'active' : 'inactive'
					}`}
					onClick={() => handleActive('PROJECTS')}
				>
					<a href='#projects'>PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default NavigationSection;
