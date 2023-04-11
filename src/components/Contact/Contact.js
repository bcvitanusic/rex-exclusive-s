import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<div className='contact'>
			<header>
				<h1>Contact</h1>
			</header>
			<hr />
			<section>
				<ContactForm />
			</section>
			<p className='desc'>Where are we?</p>
			<section className='maps'>
				<iframe
					title='Rex Exclusive'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.4505305099171!2d16.44540018387456!3d43.50810246044597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355fb25c809875%3A0x6655d6f00111cff1!2sRex%20Exclusive!5e0!3m2!1sen!2shr!4v1679596493712!5m2!1sen!2shr'
					width='800'
					height='600'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				/>
			</section>
		</div>
	);
};

export default Contact;
