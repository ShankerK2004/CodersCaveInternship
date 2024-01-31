import './App.css';
import { useEffect, useState } from 'react';
import contents from './contents.js';
import AboutPage from './Components/About';
import Header from './Components/Header';
import HomePage from './Components/Home';
import Layout from './Components/Layout';
import Theme from './Components/Theme';
import SkillsPage from './Components/SkillsPage';
import ProjectPage from './Components/ProjectsPage';
import ContactPage from './Components/ContactPage';

export default function App() {
	const [themeButton, setThemeButton] = useState(false);
	const [localColor, setLocalColor] = useState();
	const [color, setColor] = useState(localColor);
	const getPageNumber = () =>
		Math.ceil((window.scrollY + 1) / Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
	const [pageNumber, setPageNumber] = useState(getPageNumber());
	const handleScroll = () => setPageNumber(getPageNumber());
	const pages = {
		home: <HomePage />,
		about: <AboutPage />,
		skills: <SkillsPage />,
		project: <ProjectPage />,
		contact: <ContactPage />,
	};
	useEffect(() => {
		const localTheme = localStorage.getItem('theme') || '';
		setLocalColor(localTheme === 'light' ? '#000' : '#fff');
	}, [themeButton]);
	useEffect(() => {
		if (pageNumber % 2 == 0) {
			setColor('#fff');
			return;
		}
		setColor(localColor);
	}, [localColor, pageNumber]);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	const arrayOfPages = Object.entries(pages);
	return (
		<>
			<Header
				color={color}
				pageNo={pageNumber}
			/>
			<main>
				{contents.map((page, index) => (
					<div key={index}>
						<Layout
							backgroundImg={page.bg}
							imgClasses={page.name}
							page={arrayOfPages[index][1]}
							ids={page.id}
							styles={page.styles}
							headerColor={color}
						/>
					</div>
				))}
			</main>
			<Theme
				styles={{ position: 'fixed', top: '6vh', right: '2vw', '--color': color }}
				clickedFunc={setThemeButton}
				clicked={themeButton}
			/>
		</>
	);
}
