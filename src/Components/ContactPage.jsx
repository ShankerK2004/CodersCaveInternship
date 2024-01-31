import './ContactPage.css';
import LinearGradientIcon from './LinearGradientIcon';
export default function ContactPage() {
	const content = [
		['fa-regular fa-envelope', 'sherlockshanker2004@gmail.com'],
		['fa-solid fa-phone', '90XXX XXXXX'],
	];
	return (
		<div
			className='contactPage'
			id='contact'>
			<h1>Let&rsquo;s Get in Touch</h1>
			{content.map((item, index) => (
				<div
					key={index}
					className='grid details'>
					<div className='flex'>
						<i className={item[0]} />
					</div>
					<h3>{item[1]}</h3>
				</div>
			))}
			<h2>Find me on</h2>
			<div className='grid contacts'>
				<div>
					<LinearGradientIcon />
				</div>
				<div>
					<i
						className='fa-brands fa-linkedin'
						style={{ color: '#0A66C2' }}></i>
				</div>
				<div>
					<i className='fa-brands fa-github'></i>
				</div>
			</div>
		</div>
	);
}
