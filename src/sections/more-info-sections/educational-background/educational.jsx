import React from 'react';
import './educational.css';

function EducationalSection() {
	return (
		<div className='educational-container'>
			<div className='educational-header-container mb-15'>
				<h1 className='educational-header font-bold tracking-widest text-2xl'>
					Educational Background
				</h1>
			</div>

			<div className='educational-list flex flex-col gap-3'>
				<div className='educational-item-container grid grid-cols-4 gap-y-5 items-center opacity-[0.6] '>
					<div className='educational-date-container flex justify-center text-center'>
						<p className='educational-date-text text-center text-xs tracking-widest text-[var(--inactive-text)]'>
							2021 - PRESENT
						</p>
					</div>

					<div className='educational-title-container col-span-3 flex flex-col'>
						<a
							href='https://www.bulsu.edu.ph/'
							target='_blank'
							rel='noopener noreferrer'
							className='title-text-educational font-bold text-lg text-white tracking-wider'
						>
							Bulacan State University
						</a>
						<p className='educational-achievement text-xs text-white tracking-wider'>
							Bachelor of Science in Information Technology
						</p>
					</div>

					<div className='educational-description-container col-span-3 col-start-2'>
						<p className='educational-description-text text-justify text-sm tracking-widest font-stretch-semi-expanded font-extralight pr-3 text-white opacity-80'>
							Studied four years in college taking Bachelor of Science in Information Technology
							major in Web and Mobile Development.
						</p>
					</div>
				</div>

				<div className='educational-item-container grid grid-cols-4 gap-y-5 items-center opacity-[0.6] '>
					<div className='educational-date-container flex justify-center text-center'>
						<p className='educational-date-text text-center text-xs tracking-widest text-[var(--inactive-text)]'>
							2018 - 2020
						</p>
					</div>

					<div className='educational-title-container col-span-3 flex flex-col'>
						<a
							href='https://www.facebook.com/ProudToBeJosean/'
							target='_blank'
							rel='noopener noreferrer'
							className='title-text-educational font-bold text-lg text-white tracking-wider'
						>
							St. Joseph School of Baliuag
						</a>
						<p className='educational-achievement text-xs text-white tracking-wider'>
							Computer System Services
						</p>
					</div>

					<div className='educational-description-container col-span-3 col-start-2'>
						<p className='educational-description-text text-justify text-sm tracking-widest font-stretch-semi-expanded font-extralight pr-3 text-white opacity-80'>
							Studied two years of senior highschool taking the Computer System Services Track
							majoring in Networking.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EducationalSection;
