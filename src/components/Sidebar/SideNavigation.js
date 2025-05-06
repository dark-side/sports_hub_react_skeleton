import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Google, YouTube } from '@mui/icons-material';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: block;
  background: #fff;
  min-width: 240px;
  max-width: 240px;
  height: 100%;
  box-shadow: 0px 2px 24px 0px #0000001C;
  /* border-right: 1px solid var(--gray-two); */
  margin: 0;
  padding: 0;
`;

const NavigationContainer = styled.div`
  margin-top: 3.5rem; // more spacing from the top
  margin-bottom: 4rem;
`;

const FollowContainer = styled.div`
  width: 76px;
  height: 92px;
  margin-top: 2rem;
  margin-left: 28px; // align with nav items
`;

const FollowTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: var(--text-gray);
  margin-bottom: 10px;
`;

const FollowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10px;

  a {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    // align icons to left edge
    justify-self: start;
  }

  a[aria-label*="Google"] svg {
    width: 20px;
    height: 20px;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled(Link)`
  cursor: pointer;
  color: var(--text-gray);
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 0 8px 28px; // more left padding
  border-radius: 4px;
  transition: background 0.2s;
  letter-spacing: 0.02em;
  line-height: 1.2;

  &:hover {
    background: var(--gray-light);
    color: var(--primary-red);
  }
`;

const SideNavigation = ({ menuItems = [
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
] }) => {
  return (
    <SidebarContainer>
      <NavigationContainer className="navigation">
        <NavigationList className="flex flex-col gap-4">
          {menuItems.map((navLink, index) => (
            <li key={index} className="cursor-pointer text-[var(--text-gray)] text-sm font-bold">
              <NavigationItem to={`/${navLink.toLowerCase()}`}>
                {navLink.toUpperCase()}
              </NavigationItem>
            </li>
          ))}
        </NavigationList>
      </NavigationContainer>

      <FollowContainer className="follow">
        <FollowTitle className="title">Follow</FollowTitle>
        <FollowGrid className="grid">
          <Link to="/follow-facebook" aria-label="Follow us on Facebook">
            <Facebook />
          </Link>
          <Link to="/follow-twitter" aria-label="Follow us on Twitter">
            <Twitter />
          </Link>
          <Link to="/follow-google" aria-label="Follow us on Google">
            <Google style={{ width: '20px', height: '20px' }} />
          </Link>
          <Link to="/follow-youtube" aria-label="Follow us on YouTube">
            <YouTube />
          </Link>
        </FollowGrid>
      </FollowContainer>
    </SidebarContainer>
  );
};

export default SideNavigation;
