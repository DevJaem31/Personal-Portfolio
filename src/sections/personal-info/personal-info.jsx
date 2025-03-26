import React from 'react';
import './personal-info.css';
import pin from '../../assets/icons/pin.png';

function PersonalSection() {
	return (
		<div className='personal-info-container'>
			<div className='personal-info'>
				<div className='location-container mb-3 flex flex-row gap-1 items-center'>
					<img
						src={pin}
						alt='location pin'
						className='ratio-square h-[20px] opacity-50 location-pin'
					/>
					<p className='location-text ml-1 font-semibold'>Bulacan, Philippines</p>
				</div>

				<h1 className='personal-name text-5xl font-bold text-white'>
					<a href='/'>John Mark Flameño</a>
				</h1>

				<p className='work-preference text-2xl mt-3 ml-1 font-semibold text-white'>
					Full Stack Developer
				</p>

				<p className='short-intro mt-3 ml-1 w-[400px]'>
					I build web applications primarily, that are practical, easy to use, and enjoyable.
				</p>
			</div>
		</div>
	);
}

export default PersonalSection;
