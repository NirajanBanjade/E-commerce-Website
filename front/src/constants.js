// export const BASE_URL = process.env.NODE_ENV === 'development' ?
// 'http://localhost:5000' : '';
// export const BASE_URL = '';
// export const PRODUCTS_URL = '/api/List';
// export const USERS_URL = '/api/users';
// export const ORDERS_URL = '/api/orders';
// export const PAYPAL_URL = '/api/config/paypal';

export const BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5001' 
  : 'https://e-commerce-website-7-665c.onrender.com';  // Add production URL if applicable

export const PRODUCTS_URL = `${BASE_URL}/api/List`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;