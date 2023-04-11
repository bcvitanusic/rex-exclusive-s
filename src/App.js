import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import logo from './assets/logo.png';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Faq from './components/FAQ/Faq';

function App() {
	const NavItem = ({ destination }) => {
		return (
			<li className='sidebar-item'>
				<NavLink
					className={({ isActive }) => (isActive ? 'link-active' : 'link')}
					to={`/${destination}`}
				>
					{destination === '' ? 'Home' : destination}
				</NavLink>
			</li>
		);
	};

	return (
		<Router>
			<div className='app'>
				<div className='sidebar'>
					<a href='/'>
						<img
							className='logo-image'
							src={logo}
							alt='logo'
							width={250}
							height={250}
						/>
					</a>

					<hr />
					<ul className='nav'>
						<NavItem destination={''} />
						<NavItem destination={'about'} />
						<NavItem destination={'faq'} />
						<NavItem destination={'contact'} />
					</ul>
				</div>
				<div className='content'>
					<Routes>
						<Route index path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/faq' element={<Faq />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
