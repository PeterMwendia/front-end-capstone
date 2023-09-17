// // OrderSection.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import pages from '../../../utils/pages';
// import OrderItem from './OrderItem';  // Import the OrderItem component
// import './index.css';

// const OrderSection = () => {
//   const [orderItems, setOrderItems] = useState([]);

//   // Function to add an item to the order
//   const handleAddToOrder = (item) => {
//     setOrderItems([...orderItems, item]);
//   };

//   return (
//     <section className='order-section'>
//       <div className='order-section-header'>
//         <h2>Your Order</h2>
//       </div>
//       <div className='order-items'>
//         {orderItems.map((item) => (
//           <OrderItem key={item.id} item={item} />
//         ))}
//       </div>
//       <Link to={pages.get('orderOnline').path}>
//         <button className='order-btn'>
//           Order Now <FontAwesomeIcon icon={faShoppingCart} />
//         </button>
//       </Link>
//     </section>
//   );
// };

// export default OrderSection;
