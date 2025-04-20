import React from 'react';
import './project-section.css';
import arrowDiag from '../../assets/icons/right-up.png';
import capstoneImg from '../../assets/Projects/Capstone.jpg';
import todoImg from '../../assets/Projects/todo-list.png';
import FreelanceFlowImg from '../../assets/Projects/FreelanceFlow.png';

function ProjectSection() {
	return (
		<div className='project-section-container'>
			<div className='project-header-container mb-15'>
				<p className='project-header-text font-bold tracking-widest text-2xl'>Projects</p>
			</div>

			<div className='project-list-container flex flex-col items-center gap-4'>
				<div className='project-item grid grid-cols-4 gap-x-5 h-fit'>
					<div className='project-image-container row-span-2'>
						<img
							className='aspect-9/6 rounded grayscale project-image'
							src={capstoneImg}
							alt='project-image'
						/>
					</div>

					<div className='project-details-container flex flex-col col-span-3 gap-3'>
						<div className='project-title-container flex flex-col items-start'>
							<h1 className='project-name font-semibold tracking-wide m-0 color-white'>
								CROSSCONNECT • Christian Bible Church of Hagonoy
							</h1>
							<p className='position-text text-sm opacity-50'> - Main Developer</p>
						</div>

						<div className='project-info-container'>
							<p className='project-info text-sm opacity-50 text-justify'>
								Enhances CBCH's operational efficiency and community engagement by transitioning
								from paper-based methods to a centralized digital system, improving accessibility,
								data security, and reducing reliance on physical records.
							</p>
						</div>

						<div className='technologies-container flex flex-row flex-wrap gap-2'>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>React</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Express</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Node</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>MongoDB</p>
							</div>
						</div>

						<div className='code-live-container'>
							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='https://github.com/DevJaem31/Capstone-Project0001'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									View Code
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='project-item grid grid-cols-4 gap-x-5 h-fit'>
					<div className='project-image-container row-span-2'>
						<img
							className='aspect-9/6 rounded grayscale project-image'
							src={todoImg}
							alt='project-image'
						/>
					</div>

					<div className='project-details-container flex flex-col col-span-3 gap-3'>
						<div className='project-title-container flex flex-col items-start'>
							<h1 className='project-name font-semibold tracking-wide m-0 color-white'>
								Taskly • To-Do List Project
							</h1>
							<p className='position-text text-sm opacity-50'> - Personal Project</p>
						</div>

						<div className='project-info-container'>
							<p className='project-info text-sm opacity-50 text-justify'>
								A personal productivity web app that lets users manage tasks with features like user
								authentication, task creation, editing, and completion tracking. Built with a modern
								tech stack for a seamless user experience.
							</p>
						</div>

						<div className='technologies-container flex flex-row flex-wrap gap-2'>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>React</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Express</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Node</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>MongoDB</p>
							</div>
						</div>

						<div className='code-live-container flex flex-row gap-5 items-center'>
							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='https://github.com/DevJaem31/Todo-List-Project'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									View Code
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>

							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='https://to-do-list-project-pc4p.onrender.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									Visit Live
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='project-item grid grid-cols-4 gap-x-5 h-fit'>
					<div className='project-image-container row-span-2'>
						<img
							className='aspect-9/6 rounded grayscale project-image'
							src={FreelanceFlowImg}
							alt='project-image'
						/>
					</div>

					<div className='project-details-container flex flex-col col-span-3 gap-3'>
						<div className='project-title-container flex flex-col items-start'>
							<h1 className='project-name font-semibold tracking-wide m-0 color-white'>
								Freelance Flow • Freelancers Time Management App
							</h1>
							<p className='position-text text-sm opacity-50'> - Personal Project</p>
						</div>

						<div className='project-info-container'>
							<p className='project-info text-sm opacity-50 text-justify'>
								Freelance Flow is a full-stack productivity web app built with the MERN stack,
								tailored specifically for freelancers. It centralizes essential tools like task
								tracking, time management, client management, invoicing, and budgeting into a
								single, intuitive dashboard.
							</p>
						</div>

						<div className='technologies-container flex flex-row flex-wrap gap-2'>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>React</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Tailwind CSS</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Express</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Node</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>MongoDB</p>
							</div>
							<div className='technology-items opacity-50 bg-[var(--highlight-color)] pl-4 pr-4 pt-1 pb-1 rounded-3xl'>
								<p className='technology-name text-sm text-[var(--text-highlight)]'>Google OAuth</p>
							</div>
						</div>

						<div className='code-live-container flex flex-row gap-5 items-center'>
							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='hhttps://github.com/DevJaem31/Freelancer-Time-Management-App'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									View Code
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>

							<div className='visit-code-container flex flex-row items-center gap-1'>
								<a
									href='https://freelancer-time-management-app.vercel.app/'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-1 text-sm link-code'
								>
									Visit Live
								</a>

								<img
									src={arrowDiag}
									className='aspect-square h-[20px] opacity-[0.8] grayscale mt-1 proj-arrow'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectSection;
