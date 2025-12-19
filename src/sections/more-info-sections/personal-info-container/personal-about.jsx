import React from 'react';
import './personal-about.css';
import pin from '../../../assets/icons/pin.png';
import profilePic from '../../../assets/Jaem.png';

function PersonalAboutSection({ onNavigate }) {
	return (
		<div className='personal-about-container m-auto'>
			<div className='personal-grid-container flex w-[70%] m-auto flex-row  gap-5'>
				{/* <div className='personal-image-container flex col-span-2'>
					<img
						src={profilePic}
						alt=''
						className='rounded-xl profile-pic h-[15rem]'
					/>
				</div> */}

				<div className='personal-details-container col-span-2 flex flex-col justify-center'>
					<div className='location-container mb-2 flex flex-row gap-1 items-center'>
						<img
							src={pin}
							alt='location pin'
							className='ratio-square h-[20px] opacity-50 location-pin'
						/>
						<p className='location-text mt-1 font-semibold'>Bulacan, Philippines</p>
					</div>

					<h1 className='personal-name text-5xl font-bold'>
						<a
							href='/more-info'
							onClick={(e) => {
								e.preventDefault(); // Prevent page reload
								window.history.pushState({}, '', '/more-info'); // Update URL
								onNavigate('more-info'); // Change the page state
							}}
						>
							John Mark Flameño
						</a>
					</h1>

					<p className='work-preference text-xl mt-2 font-semibold '>Full Stack Developer</p>
				</div>
			</div>
		</div>
	);
}

export default PersonalAboutSection;
