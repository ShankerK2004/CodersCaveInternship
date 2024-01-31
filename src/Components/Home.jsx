export default function HomePage() {
	const styles = { textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' };
	const h1Styles = { fontSize: '3rem', ...styles };
	const contentStyles = {
		width: '50ch',
		position: 'absolute',
		right: '8vw',
		top: '36vh',
		fontWeight: 600,
		...styles,
	};
	const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
	return (
		<>
			<section
				className='content'
				id='/'
				style={isSmallScreen ? { ...contentStyles, width: '80vw', right: '5vw', top: '30vh' } : contentStyles}>
				<h1 style={h1Styles}>
					Hi there, I&rsquo;m <span style={{ color: '#FFBE0B' }}>Shanker</span>
				</h1>
				<br />
				<p>
					A university student deeply passionate about coding <br /> and programming. Join me on a journey through
					<br />
					the ever-expanding universe of knowledge <br />
					and creativity in the tech world!
				</p>
			</section>
		</>
	);
}
