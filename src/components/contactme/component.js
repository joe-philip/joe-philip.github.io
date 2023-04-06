import Heading from "../heading/component";
import './style.css';

function ContactMe() {
    return (
        <section id="contact-me">
            <Heading text="Contact me" />
            <form id="contact-me-form">
                <div className="form-row">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <div className="form-row">
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Phone" />
                </div>
                <div className="form-row">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="form-row">
                    <input type="textarea" placeholder="Message" />
                </div>
                <div className="form-row">
                    <button id="submit-button">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactMe;