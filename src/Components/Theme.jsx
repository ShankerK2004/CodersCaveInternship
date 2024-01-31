import { useEffect, useState } from 'react';
import './Theme.css';
import propTypes from 'prop-types';

export default function Theme({ styles, classes, clickedFunc, clicked }) {
	const local = localStorage.getItem('theme') || localStorage.setItem('theme', 'light');
	const [theme, setTheme] = useState(local || localStorage.getItem('theme'));
	function setThemeStyles(styleObject) {
		Object.entries(styleObject).forEach(([property, value]) => document.body.style.setProperty(property, value));
	}
	useEffect(() => {
		const themes = {
			light: {
				'--color': '#fff',
				'--font-clr': '#000',
				'--bg-clr': 'rgba(255, 187, 11, 0.2)',
				'--btn-bg-clr': 'rgba(255, 187, 11, 0.2)',
				'--button': '#FFBE0B',
				'--header-clr': 'rgba(255,255,255,0.6)',
			},
			dark: {
				'--color': '#000',
				'--font-clr': '#fff',
				'--bg-clr': '#171717',
				'--btn-bg-clr': 'rgba(255,187,11,0.8)',
				'--button': '#171717',
				'--header-clr': 'rgba(0,0,0,0.6)',
			},
		};
		setThemeStyles(themes[theme]);
	}, [theme]);
	const toggleTheme = () => {
		clickedFunc(!clicked);
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		setThemeStyles({ ...theme[newTheme] });
	};
	return (
		<div
			className={`theme_switch ${classes}`}
			style={styles}
			onClick={toggleTheme}>
			<div className='shapes'>
				<div className='line1'></div>
				<div className='line2'></div>
			</div>
			<i className='fa-regular fa-lightbulb'></i>
		</div>
	);
}
Theme.propTypes = {
	styles: propTypes.object,
	clickedFunc: propTypes.func,
	classes: propTypes.string,
	clicked: propTypes.bool,
};
