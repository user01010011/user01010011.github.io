import React, { useState } from "react";

function ContactForm() {

    // Setting API base URL 
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update with backend URL:
            const response = await fetch(`${API_BASE_URL}/api/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage('Yay! Your message was sent successfully :)!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setResponseMessage('Failed to send messsage.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Failed to send message.')
        }
    };

    return (
        <div className="container">
            <h3>💌</h3>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit} >

                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label align-top">Name (required):</label>
                    <input type="text" className="form-control borderless-input" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label align-top">Email (required):</label>
                    <input type="email" className="form-control borderless-input" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="subject" className="form-label align-top">Subject:</label>
                    <input type="text" className="form-control borderless-input" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="message" className="form-label align-top">Message (required):</label>
                    <textarea id="message" className="form-control borderless-input" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn btn-light contact-btn">Send 🚀</button>

                {responseMessage && <div>{responseMessage}</div>}

            </form>
        </div>

    )
}

export default ContactForm;