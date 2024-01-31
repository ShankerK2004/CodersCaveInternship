import './Header.css';
import PropTypes from 'prop-types';
export default function Header({ color, pageNo }) {
	const links = [
		{ href: '/', text: 'Home' },
		{ href: '#about', text: 'About' },
		{ href: '#skills', text: 'Skills' },
		{ href: '#project', text: 'Projects' },
		{ href: '#contact', text: 'Contact' },
	];

	return (
		<>
			<header className='grid'>
				<h1>SH</h1>
				<nav
					className='menu_items flex'
					style={{ color: color }}>
					{links.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className={index + 1 == pageNo ? 'link_active' : ''}>
							{link.text}
						</a>
					))}
				</nav>
			</header>
		</>
	);
}
Header.propTypes = {
	color: PropTypes.string,
	pageNo: PropTypes.number,
};
