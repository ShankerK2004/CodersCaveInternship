import BackgroundIcons from './BackgroundIcons';
import Profile from './Profile';
import PropTypes from 'prop-types';
import './Layout.css';

export default function Layout({ backgroundImg, imgClasses, page, styles, ids }) {
	const ImageStyles = {
		backgroundImage: `url('${backgroundImg}')`,
	};
	return (
		<>
			<section id={ids}>
				<aside
					className={imgClasses}
					style={ImageStyles}></aside>
				<Profile customStyles={styles} />
				{page}
				<BackgroundIcons />
			</section>
		</>
	);
}
const { string, node } = PropTypes;
Layout.propTypes = {
	backgroundImg: string,
	imgClasses: string,
	page: node,
	styles: string,
	ids: string,
};
