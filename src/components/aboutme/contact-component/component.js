import './style.css';

function ContactComponent(props) {
    return (
        <div className="about-me-info">
            {
                props.data.map(
                    key => <>
                        <span className='key'>{key.key}:&nbsp;</span>
                        <span className='val'>{key.value}</span>
                    </>
                )
            }
        </div>
    )
}

export default ContactComponent;