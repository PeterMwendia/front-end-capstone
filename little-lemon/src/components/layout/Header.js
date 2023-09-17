// import { useEffect, useState, useRef } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logoImg from './asset/Logo.svg';
// import pages from '../../utils/pages';
// import './Header.css';

// const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

// const Header = () => {
//   const { pathname } = useLocation();
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <header>
//       <nav className='navbar'>
//         <Link className='navbar-logo' to={pages.get('home').path}>
//           <img src={logoImg} alt={logoImg}/>
//         </Link>
//         <button
//           className='navbar-hamburger'
//           type='button'
//           onClick={() => setIsNavExpanded(!isNavExpanded)}
//         >
//           {isNavExpanded ?
//             <FontAwesomeIcon icon={faXmark} size='2x' /> :
//             <FontAwesomeIcon icon={faBars} size='2x' />}
//         </button>
//         <ul
//           className={isNavExpanded ? 'navbar-links expanded' : 'navbar-links'}
//           // ref={sideNavRef}
//           onClick={() => setIsNavExpanded(!isNavExpanded)}
//         >
//           {navLinks.map((navLink, index) =>
//             <li key={index}>
//               <Link
//                 className={pathname === navLink.path ? 'current-location' : ''}
//                 to={navLink.path}
//               >
//                 {navLink.name}
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from './asset/Logo.svg';
import './Header.css';

const customNavLinks = [
  { name: 'Home', path: '/', anchorable: true },
  { name: 'About', path: '/about', anchorable: true },
  { name: 'Menu', path: '/menu', anchorable: true },
  { name: 'Reservations', path: '/bookings', anchorable: true },
  { name: 'Confirm Booking', path: '/confirmed-booking', anchorable: false },
  // { name: 'Order', path: '/order', anchorable: true },
  { name: 'Login', path: '/login', anchorable: true },
];

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className='navbar'>
        <Link className='navbar-logo' to='/'>
          <img src={logoImg} alt={logoImg}/>
        </Link>
        <button
          className='navbar-hamburger'
          type='button'
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faTimes} size='2x' /> :
            <FontAwesomeIcon icon={faBars} size='2x' />}
        </button>
        <ul className={isNavExpanded ? 'navbar-links expanded' : 'navbar-links'}>
          {customNavLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                className={pathname === navLink.path ? 'current-location' : ''}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
