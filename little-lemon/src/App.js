import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Booking';
import ConfirmedBooking from './components/pages/Booking/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Login from './components/pages/Login';
import Order from './components/pages/Order';
import OrderStatus from './components/pages/Order/OrderStatus';  // Import the new component

import './App.css';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route path={pages.get('about').path} element={<About />} />
          <Route path={pages.get('menu').path} element={<Menu />} />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route path={pages.get('confirmedBooking').path} element={<ConfirmedBooking />} />
          <Route path={`${pages.get('order').path}/:id`} element={<Order />} />
          <Route path={pages.get('orderStatus').path} element={<OrderStatus />} />  {/* Add this route */}
          <Route path={pages.get('login').path} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;