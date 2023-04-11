/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_cj6dw69';
const TEMPLATE_ID = 'template_0ffvl2z';
const PUBLIC_KEY = 'UShxW0wqtnO1uCgd1';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);
	const [emailSuccess, setEmailSuccess] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: 'Please fill data correctly.',
	});

	const submit = (e) => {
		e.preventDefault();
		if (name && email && message && isValidEmail(email)) {
			let templateParams = {
				to_name: name,
				from_name: email,
				message: message,
				reply_to: email,
			};
			// TODO - send mail
			emailjs.init(PUBLIC_KEY);
			emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
				function (response) {
					setName('');
					setEmail('');
					setMessage('');
					setEmailSent(true);
					setError({
						isError: false,
					});
					setEmailSuccess(true);
				},
				function (error) {
					console.log('FAILED...', error);
					setEmailSent(false);
				}
			);
		} else {
			setError({
				isError: true,
				message: 'Please fill the data correctly.',
			});
		}
	};

	const isValidEmail = (email) => {
		const newLocal =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const regex = newLocal;
		return regex.test(String(email).toLowerCase());
	};

	return (
		<div className='contact-form'>
			{error.isError && <p className='error-message'>{error.message}</p>}

			<p className='description'>
				If you have any questions or want to reach us, use the form below:
			</p>
			{!emailSuccess && (
				<div className='form'>
					<input
						name='subject'
						type='text'
						className='feedback-input'
						placeholder='Name'
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						name='cc'
						type='email'
						className='feedback-input'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						name='body'
						className='feedback-input'
						placeholder='Comment'
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button onClick={submit}>Send</button>
				</div>
			)}

			{emailSent && (
				<p className='thankyoumessage'>
					Thank you for your message, we will be in touch in no time!
				</p>
			)}
		</div>
	);
};

export default ContactForm;
