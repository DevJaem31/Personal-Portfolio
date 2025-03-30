import React from 'react';
import './main-page.css';
import PersonalSection from '../../sections/personal-info/personal-info';
import NavigationSection from '../../sections/navigation-section/navigation-section';
import SocialMediaSections from '../../sections/social-media/social-media';

import AboutSection from '../../sections/about-section/about-section';
import SkillsSection from '../../sections/skills-section/skills-section';
import ExperienceSection from '../../sections/experience-section/experience-section';
import ProjectSection from '../../sections/project-section/project-section';
import ContactMe from '../../sections/contact-me/contact-me';

function MainPage({ onNavigate }) {
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

			<div className='right-side-container w-[70%] h-fit'>
				<section
					className='about-section sections-right pt-20'
					id='about'
				>
					<AboutSection onNavigate={onNavigate} />
				</section>
				<section
					className='h-fit pt-20 sections-right'
					id='experience'
				>
					<ExperienceSection />
				</section>
				<section
					className='h-fit pt-20 sections-right'
					id='skills'
				>
					<SkillsSection />
				</section>
				<section
					className='h-fit pt-20 sections-right'
					id='projects'
				>
					<ProjectSection />
				</section>

				<section
					className='h-fit pt-20 sections-right'
					id='footer'
				>
					<ContactMe />
				</section>
				<footer className='bg-gray-900 pt-20 flex flex-col items-center text-center opacity-35 mb-1'>
					<p>
						This design is inspired with{' '}
						<a
							className='hover:text-[var(--text-highlight)]'
							href='https://brittanychiang.com/'
						>
							Brittany Chiang
						</a>
						's Portfolio.
					</p>
					<p>© 2025 John Mark Flameño. All rights reserved.</p>
				</footer>
			</div>
		</div>
	);
}

export default MainPage;
