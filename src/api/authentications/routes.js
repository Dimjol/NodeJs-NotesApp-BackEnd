/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const routes = (handler) => [
    {
      method: 'POST',
      path: '/authentications',
      handler: handler.postAuthenticationHandler,
    },
    {
      method: 'PUT',
      path: '/authentications',
      handler: handler.putAuthenticationHandler,
    },
    {
      method: 'DELETE',
      path: '/authentications',
      handler: handler.deleteAuthenticationHandler,
    },
  ];
   
  module.exports = routes;