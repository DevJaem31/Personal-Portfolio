import React from 'react';
import './social-media.css';
import facebook from '../../assets/icons/facebook.png';
import linkedIn from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import rightUp from '../../assets/icons/right-up.png';
import JaemResume from '../../assets/Resume/Flameño_John_Mark_Resume.pdf';

function SocialMediaSections() {
	return (
		<div className='social-section-container flex flex-col gap-5'>
			<div className='resume-download-container flex flex-row items-center gap-2'>
				<a
					href={JaemResume}
					download='Flameño_John_Mark_Resume.pdf'
					className='download-resume-text'
				>
					Résumé
				</a>

				<img
					src={rightUp}
					alt=''
					className='aspect-square h-[16px] opacity-[0.8] grayscale icon-arrow'
				/>
			</div>

			<div className='social-medias flex flex-row items-center gap-5'>
				<a
					href='https://www.facebook.com/profile.php?id=61568548185514'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={facebook}
						alt='facebook icon'
						className='aspect-square h-[32px] opacity-[0.8] grayscale icon-img'
					/>
				</a>

				<a
					href='https://github.com/DevJaem31'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={github}
						alt='github icon'
						className='aspect-square h-[32px] opacity-[0.8] grayscale icon-img'
					/>
				</a>

				<a
					href='https://www.linkedin.com/in/john-mark-flameño-845b5030b'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={linkedIn}
						alt='linkedIn icon'
						className='aspect-square h-[32px] opacity-[0.8] grayscale icon-img'
					/>
				</a>
			</div>
		</div>
	);
}

export default SocialMediaSections;
