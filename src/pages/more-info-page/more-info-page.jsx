import React from 'react';
import './more-info-page.css';
import PersonalAboutSection from '../../sections/more-info-sections/personal-info-container/personal-about';
import backIcon from '../../assets/icons/back-button.png';
import SocialMediaSections from '../../sections/social-media/social-media';
import EducationalSection from '../../sections/more-info-sections/educational-background/educational';
import CertificationSection from '../../sections/more-info-sections/certificates-gallery/certifications';

function MoreInfoPage({ onNavigate }) {
	return (
		<div className='more-content-page overflow-y-scroll'>
			<div className='left-side-more flex flex-col mt-15 h-fit sticky top-15  inset-x-30 gap-10 h-[80vh]'>
				<div className='header-container flex flex-row items-center gap-5'>
					<a
						href='/'
						onClick={(e) => {
							e.preventDefault(); // Prevent page reload
							window.history.pushState({}, '', '/'); // Update URL
							onNavigate('home'); // Change the page state
						}}
						className='back tracking-wide'
					>
						<img
							src={backIcon}
							className='back-button-img aspect-square h-[28px] grayscale hover:filter-none'
						/>
					</a>

					<h1 className='font-bold back-text tracking-widest text-2xl'>More About Me</h1>
				</div>

				<section className='personal-container'>
					<PersonalAboutSection />
				</section>

				<section className='social-media-container-profile w-[60%] m-auto mt-95'>
					<SocialMediaSections />
				</section>
			</div>

			<div className='right-side-more ml-15 w-[70%] h-fit'>
				<section className='education-section pt-30'>
					<EducationalSection />
				</section>

				<section className='certification-section pt-20'>
					<CertificationSection />
				</section>

				<footer className='bg-gray-900 pt-20  flex flex-col items-center text-center opacity-35 mb-1'>
					<p>
						This design is inspired with <a href='https://brittanychiang.com/'>Brittany Chiang</a>'s
						Portfolio.
					</p>
					<p>© 2025 John Mark Flameño. All rights reserved.</p>
				</footer>
			</div>
		</div>
	);
}

export default MoreInfoPage;
