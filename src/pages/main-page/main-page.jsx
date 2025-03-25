import React from 'react';
import './main-page.css';
import PersonalSection from '../../sections/personal-info/personal-info';
import NavigationSection from '../../sections/navigation-section/navigation-section';
import SocialMediaSections from '../../sections/social-media/social-media';

import AboutSection from '../../sections/about-section/about-section';
import SkillsSection from '../../sections/skills-section/skills-section';

function MainPage() {
	return (
		<div className='main-page-container overflow-y-scroll'>
			<div className='left-side-container pl-50 grid grid-rows-4 m-15 sticky top-15 inset-x-30 h-[85vh]'>
				<div className='personal-info-sections'>
					<PersonalSection />
				</div>
				<div className='navigation-section row-span-2 pt-15 pl-2'>
					<NavigationSection />
				</div>
				<div className='social-section pl-2 flex flex-row items-end'>
					<SocialMediaSections />
				</div>
			</div>
			<div className='right-side-container mb-20 w-[70%] h-fit'>
				<section
					className='about-section sections-right pt-20'
					id='about'
				>
					<AboutSection />
				</section>
				<section
					className='h-[100vh] pt-20 sections-right'
					id='experience'
				>
					Experience
				</section>
				<section
					className='h-[100vh] pt-20 sections-right'
					id='skills'
				>
					<SkillsSection />
				</section>
				<section
					className='h-[100vh] pt-20 sections-right'
					id='projects'
				>
					Projects
				</section>
			</div>
		</div>
	);
}

export default MainPage;
