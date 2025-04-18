import React from 'react';
import './skills-section.css';
import SkillsCard from '../../components/skills-card';
import { primarySkills, additionalSkills, tools } from '../../components/datas/skills-data';

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
					<h2 className='text-center font-semibold text-xl tracking-widest primary-header'>
						PRIMARY SKILLS AND TECHNOLOGIES
					</h2>
				</div>
				<div className='skills-container-primary grid grid-cols-4 gap-y-10 items-center gap-5 grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					{primarySkills.map((skill, index) => (
						<SkillsCard
							key={index}
							icon={skill.icon}
							name={skill.name}
							className={skill.className}
						/>
					))}
				</div>
			</div>

			<div className='additional-skills-container mt-20 '>
				<div className='additional-skills-header mb-10'>
					<h2 className='text-center font-semibold text-xl ml-5 tracking-widest additional-text-header'>
						ADDITIONAL SKILLS AND TECHNOLOGIES
					</h2>
				</div>

				<div className='skills-container-additional grid grid-cols-4 gap-y-10 items-center gap-5 grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					<div className='skills-item flex flex-col items-center mt-3 gap-2'>
						<img
							src={PythonIcon}
							alt='Python'
							className='skills-icon ratio-square h-[50px] grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Python</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={JavaIcon}
							alt='Java'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-1'>Java</p>
					</div>

					<div className='skills-item flex flex-col items-center mt-3.5 gap-2'>
						<img
							src={CplusplusIcon}
							alt='C++'
							className='skills-icon ratio-square h-[50px] mb-0.5 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>C++</p>
					</div>

					<div className='skills-item flex flex-col items-center mt-3.5 gap-2'>
						<img
							src={TypescriptIcon}
							alt='Typescript'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Typescript</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={AngularIcon}
							alt='Angular'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Angular</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={DjangoIcon}
							alt='Django'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Django</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={CiscoIcon}
							alt='Cisco'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Cisco</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={SalesforceIcon}
							alt='Salesforce'
							className='skills-icon ratio-square h-[64px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Salesforce</p>
					</div>
				</div>
			</div>

			<div className='tools-used-container mt-20'>
				<div className='additional-skills-header mb-10'>
					<h2 className='text-center font-semibold text-xl ml-5 tracking-widest tools-header'>
						TOOLS BEING UTILIZED
					</h2>
				</div>

				<div className='skills-container-tools grid grid-cols-3 gap-y-10 items-center gap-5 grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={VSCodeIcon}
							alt='Visual Studio Code'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Visual Studio Code</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={AndroidIcon}
							alt='Android Studio'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name ml-2'>Android Studio</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={EclipseIcon}
							alt='Eclipse IDE'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Eclipse IDE</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={PostmanIcon}
							alt='Postman'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Postman</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={GithubIcon}
							alt='Github'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Github</p>
					</div>

					<div className='skills-item flex flex-col items-center gap-2'>
						<img
							src={MavenIcon}
							alt='Maven'
							className='skills-icon ratio-square h-[50px] m-0 grayscale opacity-50'
						/>
						<p className='skills-name'>Maven</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
