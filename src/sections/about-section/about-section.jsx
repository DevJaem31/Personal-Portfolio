import React from 'react';
import './about-section.css';
import arrLeft from '../../assets/icons/arrow-left.png';

function AboutSection() {
	return (
		<div className='about-section-container'>
			<div className='about-header-container mb-15'>
				<h3 className='about-header font-bold tracking-widest text-2xl'>About Me</h3>
			</div>
			<div className='about-paragraph-container'>
				<p className='about-paragraph text-justify mb-15 text-lg tracking-wide '>
					I am a Graduating IT Student specializing in web and mobile application development. I am
					looking for a freelance project or work where I can apply my knowledge, gain practical
					experience, and contribute to projects. I am eager to learn, improve my problem-solving
					skills, and work with a team to develop useful applications.
				</p>
			</div>
			<div className='learn-more-container flex flex-row items-center mb-15 gap-3 cursor-pointer'>
				<a
					href=''
					className='learn-more-link tracking-wide'
				>
					Learn More
				</a>
				<img
					className='ratio-square h-[20px] grayscale arrow-left'
					src={arrLeft}
					alt='arrow-left icon'
				/>
			</div>
		</div>
	);
}

export default AboutSection;
