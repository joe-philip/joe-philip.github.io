import './style.css';

function Heading(props) {
    return (
        <center>
            <h1 className='heading-component'>{props.text}</h1>
        </center>
    )
}

export default Heading;