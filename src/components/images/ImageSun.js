import logoPath from './Sun.png';

const ImageSun = () => {
	return (
		<img src={logoPath} width="16" height="16" alt="Light Mode" style={{"pointer-events": "none"}}></img>
	)
}

export default ImageSun;