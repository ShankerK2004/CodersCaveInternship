import './BackgroundIcons.css';

export default function BackgroundIcons() {
	const random = () => Math.round(Math.random() * 98);
	function iconsPosition() {
		const iconsArray = ['fa-solid fa-code', 'fa-brands fa-css3', 'fa-brands fa-square-js', 'fa-brands fa-react'];
		const iconPosition = [];
		for (let i = 0; i < 30; i++) {
			iconPosition.push([random(), random(), iconsArray[Math.floor(Math.random() * iconsArray.length)]]);
		}
		return iconPosition;
	}
	const icons = iconsPosition();
	return (
		<div
			className='background-icons'
			style={{ overflow: 'clip' }}>
			{icons.map((position, i) => (
				<i
					key={i}
					className={`${position[2]}`}
					style={{
						fontSize: '2rem',
						color: 'rgba(255, 187, 11, 0.3)',
						top: `${position[0]}vh`,
						left: `${position[1]}vw`,
					}}></i>
			))}
		</div>
	);
}
