import './style.css'

function ContactComponent(props) {
    var capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);
    const contactKeys = Object.keys(props.data);
    return (
        <div className="about-me-info">
            {
                contactKeys.map(
                    key => <>
                        <span className='key'>{capitalize(key)}:</span>
                        <span className='val'>{props.data[key]}</span>
                    </>
                )
            }
        </div>
    )
}

export default ContactComponent;