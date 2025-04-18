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
				<div className='skills-container-primary grid grid-cols-4 gap-y-10 items-center grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
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

				<div className='skills-container-additional grid grid-cols-4 gap-y-10 items-center grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					{additionalSkills.map((skill, index) => (
						<SkillsCard
							key={index}
							icon={skill.icon}
							name={skill.name}
							className={skill.className}
						/>
					))}
				</div>
			</div>

			<div className='tools-used-container mt-20'>
				<div className='additional-skills-header mb-10'>
					<h2 className='text-center font-semibold text-xl ml-5 tracking-widest tools-header'>
						TOOLS BEING UTILIZED
					</h2>
				</div>

				<div className='skills-container-tools grid grid-cols-3 gap-y-10 items-center grid-rows-subgrid justify-center grid-rows-auto gap-2 h-fit'>
					{tools.map((skill, index) => (
						<SkillsCard
							key={index}
							icon={skill.icon}
							name={skill.name}
							className={skill.className}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
