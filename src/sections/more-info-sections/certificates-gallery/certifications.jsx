import React from 'react';
import './certifications.css';
import { CiscoDetails, UdemyDetails } from '../../../components/datas/certifications-data';
import CertificationsCard from '../../../components/certifications-card';

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

				{CiscoDetails.map((cisco, index) => (
					<CertificationsCard
						key={index}
						icon={cisco.icon}
						date={cisco.date}
						provider={cisco.provider}
						title={cisco.title}
						aspectClass={'aspect-square'}
					/>
				))}
			</div>

			<div className='udemy-certificate-container grid grid-cols-3 pt-15 gap-2'>
				<div className='udemy-certificate-header col-span-3 mb-3'>
					<h1 className='udemy-header text-xl font-bold text-center'>ACCENTURE CERTIFICATES</h1>
					<p className='udemy-subtext text-center text-sm font-bold '>through Udemy Business</p>
				</div>

				{UdemyDetails.map((udemy, index) => (
					<CertificationsCard
						key={index}
						icon={udemy.icon}
						date={udemy.date}
						provider={udemy.provider}
						title={udemy.title}
						aspectClass={'aspect-[3/2]'}
					/>
				))}
			</div>
		</div>
	);
}

export default CertificationSection;
