import React, { useState } from 'react';
import { Search, Facebook, Twitter, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Brand from '../common/Brand';

const HeaderContainer = styled.header`
  display: flex;
  height: 5rem;
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  width: 160px;

  .search-icon {
    width: 14px;
    height: 14px;
    margin-left: 40px;
    margin-right: 20px;
  }

  input {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;

    &:focus-visible {
      outline: none;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 115px;
  border-left: 1px solid var(--gray-two);
  border-right: 1px solid var(--gray-two);

  .share {
    width: 38px;
    height: 22px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: var(--gray);
  }

  a {
    display: flex;
  }

  * {
    margin-right: 10px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  flex-grow: 1;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  color: var(--red);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 32px;

    &.log-in {
      border: 1px solid var(--red);
    }
  }
`;

const LangContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;

  select {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    line-height: 17px;
    background: url('data:image/svg+xml,<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.50293 6L0.73979 0L10.2661 0L5.50293 6Z" fill="black" /> </svg>') right 0.3rem center / 8px 11px no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 40px;
    text-align: start;

    &:focus-visible {
      outline: none;
    }
  }
`;

const Header = () => {
  const [lang, setLang] = useState('en');

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <HeaderContainer>
      <Brand />  

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
