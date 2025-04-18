import React from 'react';

function CertificationsCard({ icon, date, title, provider, aspectClass }) {
	return (
		<div className='cisco-certificate-item opacity-50 flex flex-row gap-5 items-center'>
			<img
				src={icon}
				className={`${aspectClass} h-[124px] grayscale certificate-cisco-img`}
			/>
			<div className='certificate-details flex flex-col gap-0'>
				<p className='text-xs text-white tracking-wider date-cisco'>{date}</p>
				<h1 className='text-lg font-bold leading-6 cisco-certificate-title'>{title}</h1>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.netacad.com/'
					className='text-xs text-white tracking-wider cisco-link'
				>
					{provider}
				</a>
			</div>
		</div>
	);
}

export default CertificationsCard;
