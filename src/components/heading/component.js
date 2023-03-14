import './style.css';

function Heading(props) {
    return (
        <center className='heading-component'>
            <h1>{props.text}</h1>
        </center>
    )
}

export default Heading;