import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../../../utils/pages';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OrderStatus.css';

const OrderStatus = () => {
  return (
    <div className='order-status-container'>
    <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Order Submitted Successfully!</h2>
      <p>Thank you for placing your order.</p>
      <Link to={pages.get('menu').path}>Review our Menu</Link>
    </div>
  );
};

export default OrderStatus;
