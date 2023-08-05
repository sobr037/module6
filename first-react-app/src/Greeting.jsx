import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <div>
      <h2>Hello {name || 'World'}</h2>
      {children && <h1>{children}</h1>}
    </div>
  );
};

export default Greeting;