import React from 'react';
import { Facebook, Twitter, Google, YouTube } from '@mui/icons-material';
import './sideNavigation.scss';

const SIDEBAR_ITEMS = [
    'HOME',
    'NBA',
    'NFL',
    'MLB',
    'NHL',
    'CBB',
    'CFB',
    'NASCAR',
    'GOLF',
    'SOCCER',
    'Team Hub',
    'LIFESTYLE',
    'DEALBOOK',
    'VIDEO'
  ];

const Navigation = ({ menuItems }) => {
  return (
    <div className="navigation">
      <ul className="flex flex-col gap-4">
        {SIDEBAR_ITEMS.map((navLink, index) => (
          <li key={index} className="cursor-pointer text-[var(--text-gray)] text-sm font-bold">
            <a href={`/${navLink.toLowerCase()}`} className="uppercase">
              {navLink}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Follow = () => {
  return (
    <div className="follow">
      <div className="title">Follow</div>
      <div className="grid">
        <a href="https://www.facebook.com" aria-label="Follow us on Facebook">
          <Facebook fontSize="large" />
        </a>
        <a href="https://www.twitter.com" aria-label="Follow us on Twitter">
          <Twitter fontSize="large" />
        </a>
        <a href="https://www.google.com" aria-label="Follow us on Google">
          <Google fontSize="large" />
        </a>
        <a href="https://www.youtube.com" aria-label="Follow us on YouTube">
          <YouTube fontSize="large" />
        </a>
      </div>
    </div>
  );
};

const Sidebar = ({ menuItems }) => {
  return (
    <div className="sidebar">
      <Navigation menuItems={menuItems} />
      <Follow />
    </div>
  );
};

export default Sidebar;
