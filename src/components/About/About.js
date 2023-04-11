import React from 'react';
import './About.css';
import {
	FaSwimmer as Swimmer,
	FaParking as park,
	FaWifi as wifi,
	FaPlane as plane,
	FaSmokingBan as nosmoking,
	FaUmbrellaBeach as Beach,
	FaRegCheckCircle as Check,
} from 'react-icons/fa';
import { TbAirConditioning as airc } from 'react-icons/tb';
import {
	MdOutlineFamilyRestroom as family,
	MdYard as Yard,
} from 'react-icons/md';
import { GiBarbecue as bbq, GiGardeningShears as garden } from 'react-icons/gi';

const About = () => {
	const ListItem = ({ text, Icon }) => {
		return (
			<li className='list-item'>
				<Icon size={20} />
				<span className='list-item-text'>{text}</span>
			</li>
		);
	};

	const BeachItem = ({ name, rating, distance }) => {
		return (
			<div className='beach'>
				<div>
					<Beach size={50} />
				</div>
				<div className='beach-info'>
					<p className='heading'>{name}</p>
					<p>
						{rating} {rating > 7.7 ? 'Very good beach' : 'Good beach'}
					</p>
					<p>{distance} from property</p>
				</div>
			</div>
		);
	};

	const Facility = ({ heading, text, items, addChargeIndexes, offSite }) => {
		return (
			<div className='facility'>
				<p className='fac-heading'>{heading}</p>
				{text && <p className='fac-desc-mini'>{text}</p>}
				{items && items.length > 0 && (
					<ul className='fac-list'>
						{items.map((item, index) => {
							let addCh =
								addChargeIndexes && addChargeIndexes.length > 0
									? addChargeIndexes.includes(index)
									: false;

							return (
								<li className='fac-item'>
									<div className='fac-list-item-heading'>
										<Check size={15} />
										<p className='fac-item-text'>{item}</p>
									</div>
									<div className='fac-list-item-heading'>
										{addCh && <p className='addCharge'>Additional charge</p>}
										{offSite && <p className='addCharge'>Off-site</p>}
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	};

	return (
		<div className='about'>
			<header>
				<h1>About</h1>
			</header>
			<hr />
			<article>
				<p className='description'>
					Situated 400 m from Diocletian's Palace in Split and 600 m from
					Bacvice Beach, this air-conditioned apartment features a seasonal
					outdoor pool. Offering free private parking, the apartment is 400 m
					from Gregory of Nin. Free WiFi is provided throughout the property.
					There is a dining area and a kitchen. Towels and bed linen are
					available in this apartment. Other facilities at Apartment Rex
					Exclusive include a sun terrace and sun loungers. Cathedral of St.
					Domnius is 400 m from Rex Exclusive Apartment , while Split City
					Museum is 400 m from the property. The nearest airport is Split
					Airport, 12 km from Apartment Rex Exclusive. This is our guests'
					favourite part of Split, according to independent reviews. Apartment
					Rex Exclusive has been welcoming guests since June 2015.
					<br />
					<br />
					<span className='lang'>The staff speaks: English, Croatian</span>
					<br />
					<br />
				</p>
			</article>
			<section className='fac'>
				<p className='fac-desc'>Most popular facilities:</p>
				<ul className='facilities'>
					<ListItem text='Outdoor swimming pool' Icon={Swimmer} />
					<ListItem text={'Free parking'} Icon={park} />

					<ListItem text={'Free WiFi'} Icon={wifi} />
					<ListItem text={'Family rooms'} Icon={family} />

					<ListItem text={'Airport shuttle'} Icon={plane} />
					<ListItem text={'Non-smoking rooms'} Icon={nosmoking} />

					<ListItem text={'Terrace'} Icon={Yard} />
					<ListItem text={'BBQ facilities'} Icon={bbq} />

					<ListItem text={'Air conditioning'} Icon={airc} />
					<ListItem text={'Garden'} Icon={garden} />
				</ul>
			</section>
			<section className='closest-beaches'>
				<BeachItem name={'Bacvice beach'} rating={7.5} distance={'600m'} />
				<BeachItem name={'Ovcice beach'} rating={7.6} distance={'850m'} />
				<BeachItem name={'Firule  beach'} rating={9.0} distance={'900m'} />
				<BeachItem name={'Trstenik'} rating={8.3} distance={'1.6km'} />
				<BeachItem name={'Znjan beach'} rating={8.4} distance={'2.2km'} />
			</section>
			<hr />
			<section className='other-fac'>
				{/* Other facilities: */}
				<Facility
					heading={'Parking'}
					text={
						'Free private parking is possible on site (reservation is needed).'
					}
				/>
				<Facility
					heading={'Internet'}
					text={'WiFi is available in all areas and is free of charge.'}
				/>
				<Facility
					heading={'Accessibility'}
					text={'Upper floors accessible by stairs only'}
				/>

				<Facility
					heading={'Transport'}
					addChargeIndexes={[0, 1]}
					items={['Shuttle service', 'Airport shuttle']}
				/>

				<Facility
					heading={'Outdoors'}
					items={[
						'Outdoor furniture',
						'Barbecue',
						'Private pool',
						'BBQ facilities',
						'Patio',
						'Balcony',
						'Terrace',
						'Garden',
					]}
				/>

				<Facility
					heading={'Kitchen'}
					items={[
						"Children's high chair",
						'Dining table',
						'Toaster',
						'Stovetop',
						'Oven',
						'Kitchenware',
						'Electric kettle',
						'Kitchen',
						'Washing machine',
						'Dishwasher',
						'Microwave',
						'Refrigerator',
					]}
				/>
				<Facility
					heading={'Outdoor swimming pool'}
					items={[
						'Seasonal',
						'Heated pool',
						'Salt-water pool',
						'Shallow end',
						'Pool/beach towels',
					]}
				/>
				<Facility
					heading={'Bedroom'}
					items={['Linen', 'Wardrobe or closet', 'All bedrooms are en suite']}
				/>

				<Facility
					heading={'Bathroom'}
					items={['Toilet paper', 'Towels', 'Toilet', 'Shower']}
				/>
				<Facility
					heading={'Living area'}
					items={['Dining area', 'Sofa', 'Fireplace', 'Seating Area']}
				/>
				<Facility
					heading={'Media & technology'}
					items={[
						'Flat-screen TV',
						'Cable channels',
						'DVD player',
						'Radio',
						'TV',
					]}
				/>
				<Facility
					heading={'Room amenities'}
					items={[
						'Socket near the bed',
						'Hardwood or parquet floors',
						'Carpeted',
						'Ironing facilities',
						'Iron',
					]}
				/>

				<Facility
					heading={'Safety and security'}
					items={[
						'Fire extinguishers',
						'CCTV outside property',
						'CCTV in common areas',
						'Smoke alarms',
						'Key access',
						'Safety deposit box',
					]}
				/>
				<Facility
					heading={'Miscellaneous'}
					items={[
						'Air conditioning',
						'Non-smoking throughout',
						'Heating',
						'Soundproof rooms',
						'Family rooms',
						'Non-smoking rooms',
					]}
				/>

				<Facility
					heading={'Activities'}
					offSite={true}
					addChargeIndexes={[0, 1]}
					items={['Gym (within 500m)', 'Golf course (within 7 km)']}
				/>
			</section>
		</div>
	);
};

export default About;
