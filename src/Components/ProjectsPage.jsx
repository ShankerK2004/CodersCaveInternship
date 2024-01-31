import './ProjectsPage.css';
export default function ProjectPage() {
	const detailsArray = [
		{
			img: 'https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215470.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=sph',
			title: 'Official Portfolio',
		},
		{
			img: 'https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=1200&h=630',
			title: 'Weather',
		},
		{
			img: 'https://assets.materialup.com/uploads/dbd98e1f-7c42-468b-a1ac-b5cc8bdf941a/attachment.png',
			title: 'ScreenSaga',
		},
		{
			img: 'https://rapidapi.com/blog/wp-content/uploads/2019/07/background-bit-bytes-2004161-300x200.jpg',
			title: 'API',
		},
		{
			img: 'https://res.cloudinary.com/monday-blogs/w_1024,h_576,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/12/Task_management-3.jpg',
			title: 'Task Management',
		},
	];

	return (
		<div
			className='projects'
			id='project'>
			<h1>Projects</h1>
			<h3>2024 Upcoming Milestones</h3>
			<p>
				I plan to undertake personal projects to further develop my web development skills and eventually share the
				completed projects for public use.
			</p>

			<div className='container flex'>
				<div className='scroller grid'>
					{detailsArray.map((item, index) => (
						<div
							key={index}
							className='rad10'>
							<div
								className='image rad10'
								style={{ backgroundImage: `url('${item.img}')` }}
								title={item.title}></div>
							<h3>{item.title}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
