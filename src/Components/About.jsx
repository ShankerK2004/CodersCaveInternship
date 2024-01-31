export default function AboutPage() {
	const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
	const containerStyles = {
		minWidth: '40ch',
		width: isSmallScreen ? '80vw' : '50ch',
		transform: isSmallScreen ? 'translateY(18%)' : 'translateY(30%)',
	};
	const buttonStyles = {
		width: isSmallScreen ? '35%' : '10%',
		height: '5vh',
		position: 'absolute',
		bottom: isSmallScreen ? '-30%' : '-42%',
		right: isSmallScreen ? '5%' : '30%',
		gridTemplateColumns: '35% 65%',
		borderRadius: '7px',
		border: '2px solid #FFBE0B',
		background: 'var(--btn-bg-clr)',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
		fontFamily: 'poppins,sans-serif',
	};

	return (
		<>
			<section
				className='grid'
				style={{ position: 'relative', top: 0 }}>
				<div style={containerStyles}>
					<h1 style={{ fontSize: '3rem', textAlign: 'center' }}>About</h1>
					<p style={{ fontWeight: '600' }}>
						I&rsquo;m Shanker, a B. Tech student at RMK Engineering College with a deep immersion in coding. Proficient
						in languages like JavaScript, HTML, CSS , REACT, NEXT JS my coding journey is fueled by a commitment to
						continuous learning. This portfolio reflects my exploration of technology, encapsulating the dynamic fusion
						of languages and the ever-evolving landscape of coding. Join me as we navigate this exciting journey
						together!
					</p>
				</div>
				<button
					className='grid'
					style={buttonStyles}>
					<span className='flex'>
						<i
							className='fa-solid fa-cloud-arrow-down'
							style={{ fontSize: '1.8rem', color: 'var(--button)' }}></i>
					</span>
					<h3>Resume</h3>
				</button>
			</section>
		</>
	);
}
