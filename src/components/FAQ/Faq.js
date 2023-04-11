import React from 'react';
import './Faq.css';

const Faq = () => {
	const Question = ({ question, answer }) => {
		return (
			<div className='faq-item'>
				<p className='question'>{question}</p>
				<p className='answer'>{answer}</p>
			</div>
		);
	};

	const data = [
		{
			question: 'How close to the beach is Apartment Rex Exclusive?',
			answer: 'The nearest beach is just 600 m from Apartment Rex Exclusive.',
		},
		{
			question: 'Does Apartment Rex Exclusive have a balcony?',
			answer: 'Yes, on the first floor.',
		},
		{
			question:
				'What are the check-in and check-out times at Apartment Rex Exclusive?',
			answer:
				'Check-in at Apartment Rex Exclusive is from 16:00, and check-out is until 10:00.',
		},
		{
			question: 'Who can use the swimming pool?',
			answer:
				'The pool can only be used by registered guests of Rex Exclusive apartment.',
		},
		{
			question: 'How much does it cost to stay at Apartment Rex Exclusive?',
			answer:
				'You agree the price of Rex Exclusive apartments directly with the owners.',
		},
		{
			question: 'Does Apartment Rex Exclusive have a terrace?',
			answer: 'Yes, there is a terrace for sunbathing by the pool.',
		},
		{
			question: 'How many guests can sleep at Apartment Rex Exclusive?',
			answer:
				'A maximum of 6 people can stay in the apartment, in three rooms.',
		},
		{
			question: 'Is Apartment Rex Exclusive popular with families?',
			answer:
				'Yes, Apartment Rex Exclusive is popular with guests booking family stays.',
		},
		{
			question: 'How far is Apartment Rex Exclusive from the centre of Split?',
			answer: 'Apartment Rex Exclusive is 400 m from the centre of Split.',
		},
	];

	return (
		<div>
			<header>
				<h1>FAQ</h1>
			</header>
			<hr />
			<section className='faq-content'>
				{data.map((item) => {
					return <Question question={item.question} answer={item.answer} />;
				})}
			</section>
		</div>
	);
};

export default Faq;
