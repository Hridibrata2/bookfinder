import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="loader_spinner"></div>
      <p>Loading books...</p>
    </div>
  );
};

export default Loader;