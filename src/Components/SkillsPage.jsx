import { useState } from 'react';
import './Skills.css';

export default function SkillsPage() {
	const categories = ['Frontend', 'Backend', 'Web Dev', 'Machine Learning'];
	const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS'];
	const backendSkills = ['C++', 'Java', 'Python', 'Flask'];
	const [viewSkills, setViewSkills] = useState(0);

	const frontendLogos = [
		{ logo: 'fa-html5', clr: '#E34F26' },
		{ logo: 'fa-css3', clr: '#1572B6' },
		{ logo: 'fa-square-js', clr: '#F7DF1E' },
		{ logo: 'fa-react', clr: '#61DAFB' },
		{
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/240px-Nextjs-logo.svg.png',
			alt: 'Next.js Logo',
		},
	];
	const backendLogos = [
		{
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/240px-ISO_C%2B%2B_Logo.svg.png',
			alt: 'C++ Logo',
		},
		{ logo: 'fa-java', clr: '#007396' },
		{ logo: 'fa-python', clr: '#3776AB' },
		{
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png',
			alt: 'Flask Logo',
		},
	];

	function handleClick(e) {
		const value = e.target.innerText;
		setViewSkills(value == categories[0] ? 0 : 1);
	}

	const selectedSkills = viewSkills === 0 ? frontendSkills : backendSkills;
	const langLogosIndex = viewSkills === 0 ? frontendLogos : backendLogos;

	return (
		<>
			<div
				className='skillsPage_content'
				id='skills'>
				<h1>Skills</h1>
				<div className='category'>
					<section>
						{categories.map((_, index) => (
							<span
								key={index}
								className={index === viewSkills ? 'spanActive' : ''}></span>
						))}
					</section>
					<section onClick={handleClick}>
						{categories.map((item, index) => (
							<div
								key={index}
								className={index === viewSkills ? 'active' : ''}>
								<h2>{item}</h2>
							</div>
						))}
					</section>
				</div>
				<div className='contents flex'>
					<h2>Familiar with</h2>
					{selectedSkills.map((lang, index) => (
						<section
							key={lang}
							className='grid rad10'>
							<div className='flex'>
								{langLogosIndex[index].logo.startsWith('h') ? (
									<img
										src={langLogosIndex[index].logo}
										alt={langLogosIndex[index].alt}
									/>
								) : (
									<i
										className={`fa-brands ${langLogosIndex[index].logo}`}
										style={{ color: langLogosIndex[index].clr }}></i>
								)}
							</div>
							<h3>{lang}</h3>
						</section>
					))}
				</div>
				<p>
					<strong>Note:</strong> The programming languages from strongest to weakest proficiency.
				</p>
			</div>
		</>
	);
}
