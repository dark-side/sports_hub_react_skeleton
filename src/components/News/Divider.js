import React from 'react';
import './divider.scss';

const YourComponent = ({ title }) => {
  return (
    <div className="title">
      <div className="name">{title}</div>
      <div className="divider"></div>
    </div>
  );
};

export default YourComponent;