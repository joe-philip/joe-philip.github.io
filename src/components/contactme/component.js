import { useState } from "react";
import Heading from "../heading/component";
import './style.css';

function ContactMe() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false)
    function handleChange(e) {
        setFormData(value => ({ ...value, [e.target.name]: e.target.value }));
    }
    function submitForm(e) {
        e.preventDefault();
        setLoading(true);
        [...document.getElementsByClassName('temp')].map(i => i.remove())
        var form = document.getElementById('contact-me-form');
        var responseElement = document.createElement('div');
        fetch(process.env.REACT_APP_SEND_MESSAGE_API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData }),
        }).then(response => {
            setLoading(false);
            if (response.status === 200) {
                responseElement.className = 'response success temp'
                responseElement.innerHTML = 'Message sent!'
                form.appendChild(responseElement)
            }
            else {
                responseElement.className = 'response fail temp'
                responseElement.innerHTML = 'Message sending failed please try again later!'
                form.appendChild(responseElement)
            }
        })
    }
    return (
        <section id="contact-me">
            <Heading text="Send me a message" />
            <form id="contact-me-form">
                {loading ? <div className="loader">Loading...</div> : ''}
                <div className="form-row">
                    <input onInput={handleChange} type="text" placeholder="First name" name="first_name" />
                    <input onInput={handleChange} type="text" placeholder="Last name" name="last_name" />
                </div>
                <div className="form-row">
                    <input onInput={handleChange} type="email" placeholder="E-mail" name="email" />
                    <input onInput={handleChange} type="text" placeholder="Phone" name="phone_number" />
                </div>
                <div className="form-row">
                    <input onInput={handleChange} type="text" placeholder="Subject" name="subject" />
                </div>
                <div className="form-row">
                    <input onInput={handleChange} type="textarea" placeholder="Message" name="message" required />
                </div>
                <div className="form-row">
                    <button id="submit-button" onClick={submitForm}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactMe;