import logoPath from './Moon.png';

const ImageMoon = () => {
	return (
		<img src={logoPath} width="16" height="16" alt="Dark Mode" style={{"pointer-events": "none"}}></img>
	)
}

export default ImageMoon;