import React from 'react';
import './certifications.css';
import {
	NetworkAddressing,
	NetworkingBasics,
	NetworkingDevices,
} from '../../../assets/Cisco Badges/cisco-badge';

import {
	VSCodeCert,
	FullStackCert,
	GitCert,
	AngularCert,
	MavenCert,
	EclipseCert,
	JavaCert,
	JUnitCert,
	SpringBootCert,
	DockerCert,
	JavaPartOneCert,
	JavaPartTwoCert,
	PreparationCert,
	ReduxCert,
} from '../../../assets/Udemy Certificates/udemy';

function CertificationSection() {
	return (
		<div className='certifications-container'>
			<div className='certifications-header-container mb-10'>
				<h1 className='certification-header text-2xl tracking-widest font-bold'>Certificates</h1>
			</div>

			<div className='cisco-certificate-container flex flex-col gap-2'>
				<div className='cisco-certificate-header col-span-2 mb-3'>
					<h1 className='cisco-header text-xl font-bold text-center'>CISCO CERTIFICATES</h1>
				</div>
				<div className='cisco-certificate-item opacity-50 flex flex-row gap-5 items-center'>
					<img
						src={NetworkingBasics}
						className='aspect-square h-[124px] grayscale certificate-cisco-img'
					/>
					<div className='certificate-details flex flex-col gap-0'>
						<p className='text-xs text-white tracking-wider date-cisco'>August 2024</p>
						<h1 className='text-lg font-bold leading-6 cisco-certificate-title'>
							Networking Basics
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.netacad.com/'
							className='text-xs text-white tracking-wider cisco-link'
						>
							Cisco Networking Academy
						</a>
					</div>
				</div>

				<div className='cisco-certificate-item opacity-50 flex flex-row gap-5 items-center'>
					<img
						src={NetworkAddressing}
						className='aspect-square h-[124px] grayscale certificate-cisco-img'
					/>
					<div className='certificate-details flex flex-col gap-0'>
						<p className='text-xs text-white tracking-wider date-cisco'>September 2024</p>
						<h1 className='text-lg font-bold leading-6 cisco-certificate-title'>
							Network Addressing and basic Troubleshooting
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.netacad.com/'
							className='text-xs text-white tracking-wider cisco-link'
						>
							Cisco Networking Academy
						</a>
					</div>
				</div>

				<div className='cisco-certificate-item opacity-50 flex flex-row gap-5 items-center'>
					<img
						src={NetworkingDevices}
						className='aspect-square h-[124px] grayscale certificate-cisco-img'
					/>
					<div className='certificate-details flex flex-col gap-0'>
						<p className='text-xs text-white tracking-wider date-cisco'>October 2024</p>
						<h1 className='text-lg font-bold leading-6 cisco-certificate-title'>
							Networking Device and Initial Configuration
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.netacad.com/'
							className='text-xs text-white tracking-wider cisco-link'
						>
							Cisco Networking Academy
						</a>
					</div>
				</div>
			</div>

			<div className='udemy-certificate-container grid grid-cols-3 pt-15 gap-2'>
				<div className='udemy-certificate-header col-span-3 mb-3'>
					<h1 className='udemy-header text-xl font-bold text-center'>ACCENTURE CERTIFICATES</h1>
					<p className='udemy-subtext text-center text-sm font-bold '>through Udemy Business</p>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={VSCodeCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>January 2025</p>
						<h1 className='text-lg font-bold leading-6 text-center udemy-certificate-title'>
							Learn Visual Studio Code (2020)
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={FullStackCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>February 2025</p>
						<h1 className='text-lg font-bold leading-6 text-center udemy-certificate-title'>
							The Complete Full-Stack Web Development Bootcamp
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={GitCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>February 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Git Complete: The definitive, step-by-step guide to Git
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={AngularCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>February 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Angular - The Complete Guide (2025 Edition)
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={MavenCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>February 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Maven Crash Course: Step-by-Step Introduction for Beginners
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={EclipseCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>February 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Eclipse Tutorial for Beginners: Learn Java IDE in 10 Steps
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={JavaCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Java Masterclass 2025: 130+ Hours of Expert Lessons
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={JUnitCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Learn Java Unit Testing with Junit & Mockito in 30 Steps
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={SpringBootCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							[NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={DockerCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Docker for the Absolute Beginner - Hands on DevOps
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={JavaPartOneCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Java SE 11 Developer 1Z0-819 ОСР Course - Part 1
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={JavaPartTwoCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Java SE 11 Developer 1Z0-819 ОСР Course - Part 2
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={PreparationCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							Preparation to Java SE 11 Developer Exam: 1Z0-819 & 1Z0-817
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>

				<div className='udemy-certificate-item opacity-50 flex flex-col gap-5 items-center'>
					<img
						src={ReduxCert}
						className='aspect-3/2 h-[124px] grayscale certificate-udemy-img'
					/>
					<div className='udemy-certificate-details flex flex-col items-center gap-0'>
						<p className='text-xs text-white tracking-wider udemy-date'>March 2025</p>
						<h1 className='text-lg leading-6 font-bold text-center udemy-certificate-title'>
							The Ultimate Redux Course 2025 - [LATEST Redux-toolkit]
						</h1>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://business.udemy.com/'
							className='text-xs text-white text-center tracking-wider udemy-link'
						>
							Accenture • Udemy Business
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CertificationSection;
