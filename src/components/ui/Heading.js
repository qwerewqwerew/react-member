import './Heading.css';

const Heading = (props) => {
	return (
		<>
			<h2 className="heading">{props.content}</h2>
		</>
	);
};
export default Heading;
