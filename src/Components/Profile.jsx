import propTypes from 'prop-types';
export default function Profile({ customStyles }) {
	const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
	const profileStyles = {
		transform: customStyles || `translate(${isSmallScreen ? '-50%,-35vh' : '-80%, -50%'})`,
		width: isSmallScreen ? '30vw' : '12vw',
		aspectRatio: '1/1',
		position: 'absolute',
		inset: '50%',
	};
	return (
		<img
			src='.\src\assets\WIN_20230621_12_54_25_Pro 1.png'
			alt='profile me'
			style={profileStyles}
		/>
	);
}
Profile.propTypes = {
	customStyles: propTypes.string,
};
