import React from 'react';
import './main-page.css';
import PersonalSection from '../../sections/personal-info/personal-info';
import NavigationSection from '../../sections/navigation-section/navigation-section';
import SocialMediaSections from '../../sections/social-media/social-media';

function MainPage() {
	return (
		<div className='main-page-container'>
			<div className='left-side-container pl-50 grid grid-rows-4'>
				<div className='personal-info-sections'>
					<PersonalSection />
				</div>
				<div className='navigation-section row-span-2 pt-15 pl-2'>
					<NavigationSection />
				</div>
				<div className='social-section pt-30 pl-2 flex flex-row items-end'>
					<SocialMediaSections />
				</div>
			</div>
			<div className='right-side-container'>Right</div>
		</div>
	);
}

export default MainPage;
