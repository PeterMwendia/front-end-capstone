const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('bookings', {
  name: 'Reservations',
  path: '/bookings',
  anchorable: true
});
pages.set('confirmedBooking', {
  name: 'Confirmed Booking',
  path: '/confirmed-booking',
  anchorable: false
});
pages.set('order', {
  name: 'Order',
  path: '/order',
  anchorable: true
});
pages.set('login', { name: 'Login', path: '/login', anchorable: true });
pages.set('orderStatus', { name: 'Order Status', path: '/order-status', anchorable: true });

export default pages;