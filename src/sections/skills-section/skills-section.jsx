import React from 'react';
import './skills-section.css';
import ReactIcon from '../../assets/icons/react.png';
import HTMLIcon from '../../assets/icons/html.png';
import CSSIcon from '../../assets/icons/css.png';
import TailwindIcon from '../../assets/icons/tailwind.png';
import JavaScriptIcon from '../../assets/icons/javascript.png';
import NodeIcon from '../../assets/icons/node.png';
import ExpressIcon from '../../assets/icons/express.png';
import MongoDBIcon from '../../assets/icons/mongodb.png';

function SkillsSection() {
	return (
		<div className='skills-section-container'>
			<div className='skills-section-header-container'>
				<h1 className='skills-header-text font-bold tracking-widest mb-20 text-2xl'>
					Skills and Technologies
				</h1>
			</div>
			<div className='primary-skills-container'>
				<div className='primary-skills-header-container mb-10'>
					<h2 className='text-center font-semibold text-xl tracking-widest'>
						PRIMARY SKILLS AND TECHNOLOGIES
					</h2>
				</div>
				<div className='skills-container grid grid-cols-4 items-center gap-5 grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>React.js</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={HTMLIcon}
							alt='HTML'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>HTML</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={CSSIcon}
							alt='CSS'
							className='skills-icon ratio-square h-[50px] mt-3 grayscale opacity-50'
						/>
						<p className='skills-name'>CSS</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={TailwindIcon}
							alt='Tailwind'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Tailwind CSS</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={JavaScriptIcon}
							alt='JavaScript'
							className='skills-icon ratio-square h-[50px] mt-3.5 grayscale opacity-50'
						/>
						<p className='skills-name '>Javascript</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={NodeIcon}
							alt='Node'
							className='skills-icon ratio-square h-[50px] mt-3.5 grayscale opacity-50'
						/>
						<p className='skills-name'>Node.js</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ExpressIcon}
							alt='Express'
							className='skills-icon ratio-square h-[50px] mt-3.5 grayscale opacity-50'
						/>
						<p className='skills-name ml-2.5'>Express.js</p>
					</div>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={MongoDBIcon}
							alt='MongoDB'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>MongoDB</p>
					</div>
				</div>
			</div>

			<div className='additional-skills-container mt-20 '>
				<div className='additional-skills-header mb-10'>
					<h2 className='text-center font-semibold text-xl ml-5 tracking-widest'>
						ADDITIONAL SKILLS AND TECHNOLOGIES
					</h2>
				</div>

				<div className='skills-container grid grid-cols-4 items-center gap-5 grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Python</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-1'>Java</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>C++</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Typescript</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Angular</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Django</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Cisco</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={ReactIcon}
							alt='React'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Salesforce</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
