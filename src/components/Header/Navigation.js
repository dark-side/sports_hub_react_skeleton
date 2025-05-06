import React, { useState } from 'react';
import { Search, Facebook, Twitter, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Brand from '../common/Brand';
import {
  HeaderContainer,
  SearchContainer,
  SocialContainer,
  LoginContainer,
  LangContainer
} from './styled/HeaderStyles';

const Header = () => {
  const [lang, setLang] = useState('en');

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <HeaderContainer>
       <Link to="/" aria-label="Share with Facebook">
         <Brand />
       </Link>

      <SearchContainer>
        <Search className="search-icon" />
        <input type="text" placeholder="Search by" />
      </SearchContainer>

      <SocialContainer>
        <div className="share">Share</div>
        <Link to="share-facebook" aria-label="Share with Facebook">
          <Facebook />
        </Link>
        <Link to="share-twitter" aria-label="Share with Twitter">
          <Twitter />
        </Link>
        <Link to="share-google" aria-label="Share with Gmail">
          <Google />
        </Link>
      </SocialContainer>

      <LoginContainer>
        <Link to="/sign-up">Sign up</Link>
        <Link to="/log-in" className="log-in">Log in</Link>
      </LoginContainer>

      <LangContainer>
        <select value={lang} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="ua">UA</option>
          <option value="ge">GE</option>
          <option value="fr">FR</option>
        </select>
      </LangContainer>
    </HeaderContainer>
  );
};

export default Header;
