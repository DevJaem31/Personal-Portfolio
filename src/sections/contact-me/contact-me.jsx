import React, { useRef } from 'react';
import './contact-me.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import './contact-me.css';

function ContactMe() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// Get current time
		const currentTime = new Date().toLocaleString(); // Format: MM/DD/YYYY, HH:MM AM/PM

		// Append time to a hidden input field
		const timeField = document.createElement('input');
		timeField.type = 'hidden';
		timeField.name = 'time_sent';
		timeField.value = currentTime;
		form.current.appendChild(timeField);

		emailjs
			.sendForm(
				'service_omh0rp2', // Replace with your EmailJS Service ID
				'template_0fybsze', // Replace with your EmailJS Template ID
				form.current,
				'Fqz8MdqJajvEFUQbu', // Replace with your EmailJS Public Key
			)
			.then(
				(result) => {
					console.log('Email sent:', result.text);
					toast.success('Message sent successfully!');
					form.current.reset();
				},
				(error) => {
					console.error('Error sending email:', error.text);
					toast.error('Failed to send message. 😞');
				},
			);
	};

	return (
		<div className='contact-me-container'>
			<div className='contact-header-container mb-15'>
				<p className='contact-header-text font-bold tracking-widest text-2xl'>Message Me</p>
			</div>

			<div className='contact-content-container'>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='contact-form space-y-4'
				>
					<input
						type='text'
						name='name'
						placeholder='Your Name'
						className='border p-2 w-full rounded-md focus:outline-none border-[var(--highlight-color)]'
						required
					/>
					<input
						type='email'
						name='user_email'
						placeholder='Your Email'
						className='border p-2 w-full rounded-md focus:outline-none border-[var(--highlight-color)]'
						required
					/>
					<textarea
						name='message'
						placeholder='Your Message'
						className='border p-2 w-full min-h-30 rounded-md focus:outline-none border-[var(--highlight-color)]'
						required
					></textarea>
					<button
						type='submit'
						className='submit-button opacity-50 text-[var(--highlight-color)] font-bold px-4 py-2 rounded-lg cursor-pointer bg-[var(--text-highlight)]'
					>
						<span>Send</span>
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
