import React from 'react';
import './brand.scss';

const Brand = () => {
  return (
    <div className="flex items-center justify-center bg-[var(--primary-red)] h-full w-[16rem] max-h-20">
      <span className="font-semibold text-2xl text-[var(--text-light)]">Sports Hub</span>
    </div>
  );
};

export default Brand;
