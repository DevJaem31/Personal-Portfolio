import React from 'react';
import './project-section.css';
import arrowDiag from '../../assets/icons/right-up.png';
import capstoneImg from '../../assets/Projects/Capstone.jpg';

function ProjectSection() {
	return (
		<div className='project-section-container'>
			<div className='project-header-container mb-15'>
				<p className='project-header-text font-bold tracking-widest text-2xl'>Projects</p>
			</div>

			<div className='project-list-container flex flex-col items-center gap-4'>
				<div className='project-item grid grid-cols-4 gap-x-5 h-fit'>
					<div className='project-image-container row-span-2'>
						<img
							className='aspect-9/6 rounded grayscale project-image'
							src={capstoneImg}
							alt='project-image'
						/>
					</div>

					<div className='project-details-container flex flex-col col-span-3 gap-3'>
						<div className='project-title-container flex flex-col items-start'>
							<h1 className='project-name font-semibold tracking-wide m-0 color-white'>
								CROSSCONNECT • Christian Bible Church of Hagonoy
							</h1>
							<p className='position-text text-sm opacity-50'> - Main Developer</p>
						</div>

						<div className='project-info-container'>
							<p className='project-info text-sm opacity-50 text-justify'>
								Enhances CBCH's operational efficiency and community engagement by transitioning
								from paper-based methods to a centralized digital system, improving accessibility,
								data security, and reducing reliance on physical records.
							</p>
						</div>

						<div className='technologies-container flex flex-row flex-wrap gap-2'>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>React</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Express</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Node</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>MongoDB</p>
							</div>
						</div>

						<div className='code-live-container'>
							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='https://github.com/DevJaem31/Capstone-Project0001'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									View Code
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectSection;
