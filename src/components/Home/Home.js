import React, { useState, useCallback } from 'react';
import './Home.css';
import 'react-slideshow-image/dist/styles.css';
import pic2 from '../../assets/2.jpeg';
import pic3 from '../../assets/3.jpeg';
import pic4 from '../../assets/4.jpeg';
import pic5 from '../../assets/5.jpeg';
import pic6 from '../../assets/6.jpeg';
import pic7 from '../../assets/7.jpeg';
import pic8 from '../../assets/8.jpeg';
import pic9 from '../../assets/9.jpeg';
import pic10 from '../../assets/10.jpeg';
import pic11 from '../../assets/11.jpeg';
import pic12 from '../../assets/12.jpeg';
import pic13 from '../../assets/13.jpeg';
import pic14 from '../../assets/14.jpeg';
import pic15 from '../../assets/15.jpeg';
import pic16 from '../../assets/16.jpeg';
import pic17 from '../../assets/17.jpeg';
import pic18 from '../../assets/18.jpeg';
import pic19 from '../../assets/19.jpeg';
import pic20 from '../../assets/20.jpeg';
import pic21 from '../../assets/21.jpeg';
import pic22 from '../../assets/22.jpeg';
import pic23 from '../../assets/23.jpeg';
import pic24 from '../../assets/24.jpeg';
import pic25 from '../../assets/25.jpeg';
import pic26 from '../../assets/26.jpeg';
import pic28 from '../../assets/28.jpeg';
import pic29 from '../../assets/29.jpeg';
import pic30 from '../../assets/30.jpeg';
import pic31 from '../../assets/31.jpeg';
import pic32 from '../../assets/32.jpeg';
import pic33 from '../../assets/33.jpeg';

import { TbToolsKitchen2 as Kitchen } from 'react-icons/tb';
import { IoMdResize as Size } from 'react-icons/io';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import {
	MdHouse as House,
	MdYard as Yard,
	MdBalcony as Balcony,
} from 'react-icons/md';

import {
	GiBarbecue as Bbq,
	GiGardeningShears as Garden,
	GiWashingMachine as Wash,
} from 'react-icons/gi';
import { FaWifi as Wifi, FaSwimmingPool as Pool } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const images = [
	{
		src: pic2,
		width: 5,
		height: 3,
	},
	{
		src: pic3,
		width: 5,
		height: 3,
	},
	{
		src: pic4,
		width: 5,
		height: 3,
	},
	{
		src: pic5,
		width: 5,
		height: 3,
	},
	{
		src: pic6,
		width: 5,
		height: 3,
	},
	{
		src: pic7,
		width: 5,
		height: 3,
	},
	{
		src: pic8,
		width: 5,
		height: 3,
	},
	{
		src: pic9,
		width: 5,
		height: 3,
	},
	{
		src: pic10,
		width: 5,
		height: 3,
	},
	{
		src: pic11,
		width: 5,
		height: 3,
	},
	{
		src: pic12,
		width: 5,
		height: 3,
	},
	{
		src: pic13,
		width: 5,
		height: 3,
	},
	{
		src: pic14,
		width: 5,
		height: 3,
	},
	{
		src: pic15,
		width: 5,
		height: 3,
	},
	{
		src: pic16,
		width: 5,
		height: 3,
	},
	{
		src: pic33,
		width: 5,
		height: 3,
	},
	{
		src: pic17,
		width: 5,
		height: 3,
	},
	{
		src: pic18,
		width: 5,
		height: 3,
	},
	{
		src: pic19,
		width: 5,
		height: 3,
	},
	{
		src: pic20,
		width: 5,
		height: 3,
	},
	{
		src: pic21,
		width: 5,
		height: 3,
	},
	{
		src: pic22,
		width: 5,
		height: 3,
	},
	{
		src: pic23,
		width: 5,
		height: 3,
	},
	{
		src: pic24,
		width: 5,
		height: 3,
	},
	{
		src: pic25,
		width: 5,
		height: 3,
	},
	{
		src: pic26,
		width: 5,
		height: 3,
	},
	{
		src: pic28,
		width: 5,
		height: 3,
	},
	{
		src: pic29,
		width: 5,
		height: 3,
	},
	{
		src: pic30,
		width: 5,
		height: 3,
	},
	{
		src: pic31,
		width: 5,
		height: 3,
	},
	{
		src: pic32,
		width: 5,
		height: 3,
	},
];

export const Home = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const BasicInfoItem = ({ Icon, text }) => {
		return (
			<div className='info-item'>
				{Icon && <Icon size={20} />}
				<p>{text}</p>
			</div>
		);
	};

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<div className='main'>
			<div className='hero'>
				<div className='hero-header'>
					<p className='hero-heading'>Rex Exclusive</p>

					<NavLink className={'hero-link'} to='/contact'>
						Contact Us
					</NavLink>
				</div>
			</div>
			<div className='content-wrapper'>
				<section>
					<h2>Rex Exclusive</h2>
					{/* <hr /> */}
					<div className='home-desc'>
						<p>
							This property is located in the center of Split, 400 meters from
							Diocletian's Palace and 600 meters from Bačvice beach. The statue
							of Gregory of Nin is 400 meters away. Apartment Rex Exclusive is
							located 400 meters from the Cathedral of St. Dujma and the Museum
							of the City of Split. Split Airport is 12 km away. This is our
							guests' favorite part of 'Split', based on unbiased reviews. Free
							WiFi is available throughout the facility. Apartment Rex Exclusive
							is located in a quiet family environment in the city center, in
							the owner's family house, and inappropriate behavior is not
							allowed.
						</p>
						<p>
							This apartment on the ground floor has a spacious dining room,
							kitchen and living room. Upstairs there are 3 bedrooms, each with
							its own bathroom. Next to the pool there is an enclosed barbecue
							with a large stone table . Towels, bed linen and pool towels are
							available to guests. As part of the Rex Exclusive apartment, you
							can relax on the sunny terrace next to the pool with deckchairs.
							Guests have at their disposal accommodation in an air-conditioned
							apartment, a seasonal outdoor pool and free private parking.
						</p>
					</div>
				</section>
				<section className='basic-info'>
					<BasicInfoItem text={'Entire house'} Icon={House} />
					<BasicInfoItem text={'Kitchen'} Icon={Kitchen} />
					<BasicInfoItem text={'210 m2 Size'} Icon={Size} />
					<BasicInfoItem text={'BBQ facilities'} Icon={Bbq} />
					<BasicInfoItem text={'Garden'} Icon={Garden} />
					<BasicInfoItem text={'Swimming pool'} Icon={Pool} />
					<BasicInfoItem text={'Washing machine'} Icon={Wash} />
					<BasicInfoItem text={'Free WiFi'} Icon={Wifi} />
					<BasicInfoItem text={'Terrace'} Icon={Yard} />
					<BasicInfoItem text={'Balcony'} Icon={Balcony} />
				</section>
				<Gallery
					photos={images}
					onClick={openLightbox}
					targetRowHeight={150}
					margin={15}
				/>
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<div className='padding-modal'>
								<Carousel
									currentIndex={currentImage}
									views={images.map((x) => ({
										...x,
										srcset: x.srcSet,
										caption: x.title,
									}))}
								/>
							</div>
						</Modal>
					) : null}
				</ModalGateway>
			</div>
		</div>
	);
};

export default Home;
