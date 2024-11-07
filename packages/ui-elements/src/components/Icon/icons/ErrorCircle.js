import React from 'react';

const ErrorCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    <path d="M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16ZM20.7071 11.2929C20.3166 10.9024 19.6834 10.9024 19.2929 11.2929L16 14.5858L12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L14.5858 16L11.2929 19.2929C10.9024 19.6834 10.9024 20.3166 11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071L16 17.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17.4142 16L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929Z" />
  </svg>
);

export default ErrorCircle;
