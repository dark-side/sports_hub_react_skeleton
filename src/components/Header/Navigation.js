import React, { useState } from 'react';
import { Search, Facebook, Twitter, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navigation.scss';
import Brand from '../common/Brand';

const Header = () => {
  const [lang, setLang] = useState('en');

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <header className="header">
      <Brand />  

      <div className="search">
        <Search className="search-icon" />
        <input type="text" placeholder="Search by" />
      </div>

      <div className="social">
        <div className="share">Share</div>
        <Link to="share-facebook" aria-label="Share with Facebook">
          <Facebook fontSize="large" />
        </Link>
        <Link to="share-twitter" aria-label="Share with Twitter">
          <Twitter fontSize="large" />
        </Link>
        <Link to="share-google" aria-label="Share with Gmail">
          <Google fontSize="large" />
        </Link>
      </div>

      <div className="login">
        <Link to="/sign-up">Sign up</Link>
        <Link to="/log-in" className="log-in">Log in</Link>
      </div>

      <div className="lang">
        <select value={lang} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="ua">UA</option>
          <option value="ge">GE</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
