import React from 'react';

function SkillsCard({ icon, name, className }) {
	return (
		<div className='skills-item flex flex-col items-center gap-2'>
			<img
				src={icon}
				alt={name}
				className={`skills-icon ratio-square  m-0 grayscale opacity-50 ${className}`}
			/>
			<p className='skills-name ml-2'>{name}</p>
		</div>
	);
}

export default SkillsCard;
