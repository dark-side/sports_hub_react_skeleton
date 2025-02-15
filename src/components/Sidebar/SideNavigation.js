import React from 'react';
import { Facebook, Twitter, Google, YouTube } from '@mui/icons-material';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: block;
`;

const NavigationContainer = styled.div`
  margin: 4rem 0;
`;

const FollowContainer = styled.div`
  width: 76px;
  height: 92px;
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
`;

const FollowLink = styled.a`
  margin-bottom: 15px;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  color: var(--text-gray);
  font-size: 0.875rem;
  font-weight: bold;
`;

const NavigationLink = styled.a`
  text-transform: uppercase;
`;

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
    <NavigationContainer>
      <NavigationList>
        {SIDEBAR_ITEMS.map((navLink, index) => (
          <NavigationItem key={index}>
            <NavigationLink href={`/${navLink.toLowerCase()}`}>
              {navLink}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
};

const Follow = () => {
  return (
    <FollowContainer>
      <FollowTitle>Follow</FollowTitle>
      <FollowGrid>
        <FollowLink href="https://www.facebook.com" aria-label="Follow us on Facebook">
          <Facebook fontSize="large" />
        </FollowLink>
        <FollowLink href="https://www.twitter.com" aria-label="Follow us on Twitter">
          <Twitter fontSize="large" />
        </FollowLink>
        <FollowLink href="https://www.google.com" aria-label="Follow us on Google">
          <Google fontSize="large" />
        </FollowLink>
        <FollowLink href="https://www.youtube.com" aria-label="Follow us on YouTube">
          <YouTube fontSize="large" />
        </FollowLink>
      </FollowGrid>
    </FollowContainer>
  );
};

const Sidebar = ({ menuItems }) => {
  return (
    <SidebarContainer>
      <Navigation menuItems={menuItems} />
      <Follow />
    </SidebarContainer>
  );
};

export default Sidebar;
