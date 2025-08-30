import React from 'react';
import './experience-section.css';
import arrowDiag from '../../assets/icons/right-up.png';

function ExperienceSection() {
	return (
		<div className='experience-section-container'>
			<div className='experience-section-header mb-15'>
				<h1 className='header-text-experience font-bold tracking-widest text-2xl'>Experiences</h1>
			</div>

			<div className='experience-list-container flex flex-col gap-5'>
				<div className='experience-item-container grid grid-cols-4 gap-y-5 items-center opacity-[0.6] '>
					<div className='date-container flex justify-center text-center'>
						<p className='date-text text-center text-xs tracking-widest text-[var(--inactive-text)]'>
							JULY 2025 — PRESENT
						</p>
					</div>

					<div className='experience-title-container col-span-3 flex gap-1'>
						<a
							href='https://www.accenture.com/ph-en'
							target='_blank'
							rel='noopener noreferrer'
							className='title-text-experience font-bold text-lg text-white tracking-wider'
						>
							Associate Software Engineer • Accenture Philippines
						</a>
						<img
							src={arrowDiag}
							alt=''
							className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 exp-arrow'
						/>
					</div>

					<div className='description-container col-span-3 col-start-2'>
						<p className='description-text text-justify text-sm tracking-widest font-stretch-semi-expanded font-extralight pr-3 text-white opacity-80'>
							Currently under package app development, and already finished ATAS of 
							<span>Accenture Philippines</span> and currently taking Java Full-Stack Booth Camp.
						</p>
					</div>
				</div>
				
				<div className='experience-item-container grid grid-cols-4 gap-y-5 items-center opacity-[0.6] '>
					<div className='date-container flex justify-center text-center'>
						<p className='date-text text-center text-xs tracking-widest text-[var(--inactive-text)]'>
							JAN — APR 2025
						</p>
					</div>

					<div className='experience-title-container col-span-3 flex gap-1'>
						<a
							href='https://www.accenture.com/ph-en'
							target='_blank'
							rel='noopener noreferrer'
							className='title-text-experience font-bold text-lg text-white tracking-wider'
						>
							Student Intern • Accenture Philippines
						</a>
						<img
							src={arrowDiag}
							alt=''
							className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 exp-arrow'
						/>
					</div>

					<div className='description-container col-span-3 col-start-2'>
						<p className='description-text text-justify text-sm tracking-widest font-stretch-semi-expanded font-extralight pr-3 text-white opacity-80'>
							Take Front End and Back End development course in Udemy by{' '}
							<span>Accenture Philippines</span> which are under their program{' '}
							<em>Accenture Academy - Technology.</em>
						</p>
					</div>
				</div>

				<div className='experience-item-container grid grid-cols-4 gap-y-5 items-center opacity-[0.6] '>
					<div className='date-container flex justify-center text-center'>
						<p className='date-text text-center text-xs tracking-widest text-[var(--inactive-text)]'>
							OCT — DEC 2023
						</p>
					</div>

					<div className='experience-title-container col-span-3 flex gap-1'>
						<a
							href='https://www.salesforce.com/ap/'
							target='_blank'
							rel='noopener noreferrer'
							className='title-text-experience font-bold text-lg text-white tracking-wider'
						>
							Admin Trainee • Salesforce Philippines
						</a>
						<img
							src={arrowDiag}
							alt=''
							className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 exp-arrow'
						/>
					</div>

					<div className='description-container col-span-3 col-start-2'>
						<p className='description-text text-justify text-sm tracking-widest font-extralight pr-3 text-white opacity-80'>
							Trained as an Admin trainee for 3 months, gaining hands-on experience in managing
							Salesforce tools and systems. And completed the <em>Admin Superset</em>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperienceSection;
