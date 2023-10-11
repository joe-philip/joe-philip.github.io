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
                form.appendChild(responseElement);
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    subject: '',
                    message: ''
                });
            }
            else {
                response.json().then(
                    value => {
                        for (const key in value) {
                            var errorList = document.createElement('ul');
                            errorList.classList = 'temp error-list';
                            var element = document.getElementsByName(key)[0];
                            value[key].map( // eslint-disable-next-line
                                message => {
                                    var li = document.createElement('li');
                                    li.innerHTML = message;
                                    errorList.appendChild(li);
                                    return li;
                                }
                            )
                            element.after(errorList);
                        }
                    },
                    reject => {
                        responseElement.className = 'response fail temp'
                        responseElement.innerHTML = 'Message sending failed please try again later!'
                        form.appendChild(responseElement)
                    }
                )
            }
        })
    }
    return (
        <section id="contact-me">
            <Heading text="Send me a message" />
            <form id="contact-me-form">
                {loading ? <div className="loader">Loading...</div> : ''}
                <div className="form-row">
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.first_name} type="text" placeholder="First name" name="first_name" />
                    </div>
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.last_name} type="text" placeholder="Last name" name="last_name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.email} type="email" placeholder="E-mail" name="email" />
                    </div>
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.phone_number} type="text" placeholder="Phone" name="phone_number" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.subject} type="text" placeholder="Subject" name="subject" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-element">
                        <input onInput={handleChange} value={formData.message} type="textarea" placeholder="Message" name="message" required />
                    </div>
                </div>
                <div className="form-row">
                    <button id="submit-button" onClick={submitForm}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactMe;